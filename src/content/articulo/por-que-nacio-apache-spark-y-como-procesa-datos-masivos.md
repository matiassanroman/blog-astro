---
title: "¿Por qué nació Apache Spark y cómo procesa datos masivos?"
pubDate: "2025-09-21"
image: "/articlesImages/blog-placeholder-1.jpg"
tags: ["BigData", "Spark"]

---

# Introducción

Imaginemos que tenemos un archivo CSV en nuestro ordenador. Si lo cargamos y trabajamos con él desde el disco, todo se vuelve lento.  
La memoria RAM es mucho más rápida (entre 10 y 100 veces), pero tiene una limitación: no podemos cargar archivos de gran volumen.

---

## El problema

- Operar con un CSV muy grande desde RAM obliga a leerlo en partes desde el disco.  
- Esto empeora el rendimiento, porque leer desde disco siempre será un cuello de botella.  

Ahora, pensemos: **¿y si usamos varios ordenadores con su propia RAM?**.  Ahí surge otra serie de preguntas:  

1. ¿Cómo se dividen los datos entre esas máquinas?  
2. ¿Cómo se controlan los datos?  
3. ¿Cómo hacemos operaciones conjuntas si cada máquina tiene una parte distinta?  

---

## La solución: Spark

Apache Spark aparece para resolver este problema. Su idea principal es **distribuir los datos en la RAM de varias máquinas** (un clúster), y que cada máquina (nodo) procese su parte de manera paralela.  

Un clúster tiene:  

- **Nodo maestro (master)**: reparte las tareas.  
- **Nodos trabajadores (workers)**: ejecutan el procesamiento. 

Spark se apoya en el paradigma **MapReduce**, que sigue el principio de “divide y vencerás” para procesar grandes volúmenes de datos.  

---

## Ejemplo

Imagina que tienes 9 registros: 

- El *Worker 1* almacena los primeros 4.  
- Los *Workers 2, 3 y 4* almacenan el resto.  

![Ejemplo Cluster Workers](/spark/ejemplo_cluster_workers.png)

Si quieres operar solo con los primeros 5 registros, solo trabajarán los workers 1 y 2. Al final, Spark junta los resultados y te devuelve un único resultado, sin que tú tengas que preocuparte por cómo se repartieron los datos.  

---

## MapReduce vs Spark

### Limitaciones del procesamiento tradicional

Los ordenadores de hoy en día no pueden procesar datos masivos de manera eficiente en tiempos críticos.

### Solución: procesamiento distribuido

- Procesamiento paralelo y distribuido.
- Conjunto de ordenadores que se comunican a través de "message parsing" para resolver un problema común.
- Clústeres: ordenadores conectados en red + plataforma de procesamiento distribuido.

### ¿Cómo procesamos en una plataforma distribuida?

- El algoritmo MapReduce procesa *datasets* de tamaño Petabyte.
- Mapper: produce pares (Clave, Valor) ordenados por clave.
- Reducer: recibe las salidas de los mappers y genera el resultado final.

### Ejemplo: contar palabras en un texto

1. Datos:

    - data 1 --> hola como estas casa amarilla
    - data 2 --> hola como casa casa 

2. Mapper (clave = palabra, valor = 1):

```text
data 1:

(hola, 1)
(como, 1)
(estas, 1)
(casa, 1)
(amarilla, 1)

data 2:

(hola, 1)
(como, 1)
(casa, 1)
(casa, 1)
```

3. Fase Shuffle y Sort, acá se ordena por clave y agrupa los valores.

```text
(amarilla, [1])
(casa, [1, 1, 1])
(como, [1, 1])
(estas, [1])
(hola, [1, 1])
```

4. Reducers cuentan las ocurrencias y devuelven el resultado:

```text
(amarilla, 1)
(casa, 3)
(como, 2)
(estas, 1)
(hola, 2)
```

### Problemas de la solución:
  
1. **Fallas parciales:** una máquina falla y se perderá todo el procesamiento distribuido. Se busca redundancia en el sistema.
2. **Asincronización:** cada computador trabaja a su ritmo.
3. **Escalabilidad:** difícil de mantener a gran escala.
4. **Consistencia:** mantener los datos coherentes entre nodos no es trivial.

MapReduce fue el primer gran paradigma de procesamiento distribuido, pero Spark lo mejora con su modelo de DAG (Directed Acyclic Graph), ofreciendo mayor velocidad y eficiencia en el procesamiento de datos.

---

# ¿Qué es Apache Spark?

Es un framework de computación distribuida de código abierto diseñado para procesar grandes volúmenes de datos de forma rápida y eficiente.
Las principales características:

### Velocidad

Los cálculos (**tareas**) los hace como un DAG (**Grafo Acíclico Dirigido**) permitiendo el paralelismo y beneficiando la CPU y RAM.

### Fácil de Usar

La unidad básica es una abstracción llamada RDD (**Resilient Distributed Dataset**), a partir de esta se construyen las demas como: dataset y dataframe. Un RDD representa una coleccion inmutable de objetos distribuidos en varios nodos de cluster que se pueden procesar en paralelo.

- **R:** es resiliente, si hubo un fallo, Spark es capaz de recontruir ese RDD siguiendo el historial de operaciones.
- **D:** los datos estan distribuidos en varios nodos para poder procesarlos mas rapido.
- **D:** dataset es un conjunto de datos.

Los RDD son perezosos, lo que significa que las transformaciones aplicadas a él no se ejecutan de inmediato, sino que se almacenan en un DAG para ser procesadas solo cuando se activa una acción específica.

### Modularidad

Permite adoptar diferentes configuraciones dependiendo del proyecto. Cada módulo tiene una funcionalidad específica, como procesar datos en batch o tiempo real, consultas SQL, aprendizaje automático, cálculos de grafos, creando flujos de trabajo complejos con una sola aplicación.

### Extensibilidad

Se puede leer de muchas fuentes como Hadoop, Cassandra, Mongo, Hive y separadamente procesarlo en la memoria.

---

## Módulos

Spark no es solo un motor de procesamiento, sino que incluye varios módulos que amplían sus capacidades:

### Spark Core

Proporciona las funciones básicas como tareas de distribución, paralelización, manejo de memoria y recuperación ante fallos. Todos los demás módulos dependen de él.

### Spark SQL

1. Trabaja bien con datos estructurados y semiestructurados.
2. Podes leer de tablas, CSV, text, Json, Parquet.
3. Ofrece el lenguaje **Spark SQL** y la **API DataFrame**, que combina la facilidad del SQL con la flexibilidad de la programación en Scala, Python o Java.

```scala
//Scala
val filePath = "C:\\Files\\empleados.csv"

//Leemos de un CSV
val df: DataFrame = spark.read
    .option("header", "true")
    .option("inferSchema", "true")
    .csv(filePath)

//Contamos el número de filas del CSV
val recordCount = df.count()
```
### Spark Streaming

Procesa flujos de datos en tiempo real. Ideal para casos como monitoreo de logs, IoT o sistemas de detección de fraudes.

### MLlib (Machine Learning Library)

Una librería de algoritmos de machine learning ya optimizados para ejecutarse en clústeres Spark: clasificación, regresión, clustering, recomendaciones, reducción de dimensionalidad, etc.

### GraphX

Un módulo especializado en el análisis de grafos (redes sociales, conexiones, rutas). Incluye algoritmos como PageRank, búsqueda de comunidades y análisis de caminos más cortos.

---

## Arquitectura y Componentes

### Distribución General

Apache Spark se organiza en varios componentes que interactúan para ejecutar aplicaciones distribuidas:

![Distribucion](/spark/distribucion.png)

1. El usuario inicia una SparkSession.
2. El Driver comunica al Cluster Manager qué recursos necesita.
3. El Cluster Manager asigna nodos de trabajo. Spark puede trabajar con diferentes gestores (Local, Standalone, YARN, Mesos, Kubernetes).
4. En cada nodo se lanza un Executor, que administra recursos de CPU y memoria y ejecuta las tasks.

![SparkExecutor](/spark/sparkexecutor.png)

---

## Datos Distribuidos y Particiones

Apache Spark organiza los datos en particiones distribuidas a lo largo del almacenamiento. Esto le permite dividir el trabajo en fragmentos manejables que pueden procesarse en paralelo por diferentes nodos del clúster.

### Logical Model Across Distributed Storage

El modelo lógico de Spark considera los datos como un conjunto de particiones que pueden estar distribuidas en distintos sistemas de almacenamiento, ya sea en la nube o en servidores locales.

### Data Partitions

Las particiones corresponden a archivos distribuidos que pueden estar en:

- **S3 (Amazon Simple Storage Service)**
- **Azure Blob Storage**
- **HDFS (Hadoop Distributed File System)**

Cada partición es independiente y se asigna a un Executor para su procesamiento.

### Ejecución con proximidad a los datos

Los Executors intentan tomar la partición más cercana físicamente al nodo en el que se ejecutan, minimizando la transferencia de datos a través de la red y mejorando así el rendimiento.

---

## Conclusión

Apache Spark nació para superar las limitaciones del procesamiento tradicional en una sola máquina. Al distribuir los datos y las tareas en múltiples nodos, permite trabajar con volúmenes masivos de información de forma eficiente, escalable y tolerante a fallos.
En los próximos artículos profundizaremos en cómo usar RDD, DataFrames y Datasets para procesar datos de manera práctica.

---

## Referencias

- Damji, J. S., Wenig, B., Das, T., & Lee, D. (2020). *Learning Spark: Lightning-Fast Data Analytics* (2nd ed.). O’Reilly Media. © 2020 Databricks Inc.

- [Video sobre Curso Apache Spark desde 0 - Tema 1 - INTRODUCCIÓN](https://www.youtube.com/watch?v=7gm-NNtESxc)  
   de Manuel Pérez Luque

- [Video Apache Spark | Te lo explico en 5 minutos!](https://www.youtube.com/watch?v=B038xGcnaG4)  
   de Leonardo Kuffo

---