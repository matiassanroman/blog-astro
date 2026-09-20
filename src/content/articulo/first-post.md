---
title: "¿Por qué nació Apache Spark y cómo procesa datos masivos?"
pubDate: "Sep 12 2025"
image: "/articlesImages/blog-placeholder-1.jpg"
tags: ["BigData", "Spark"]
---

# ¿Por qué nació Apache Spark y cómo procesa datos masivos?

Imaginemos que tenemos un archivo CSV en nuestro ordenador.  
Si lo cargamos y trabajamos con él desde el disco, todo se vuelve lento.  
La memoria RAM es mucho más rápida (entre 10 y 100 veces), pero tiene una limitación: no podemos cargar archivos gigantes.  

![Disco vs RAM](/spark/disco_vs_ram.png)

---

## El problema
- Operar con un CSV muy grande desde RAM obliga a leerlo en partes desde el disco.  
- Esto empeora la performance, porque leer desde disco siempre será un cuello de botella.  

Ahora, pensemos: **¿y si usamos varias computadoras con su propia RAM?**  
Ahí surge otra serie de preguntas:  
- ¿Cómo se dividen los datos entre esas máquinas?  
- ¿Cómo se controlan?  
- ¿Cómo hacemos operaciones conjuntas si cada máquina tiene una parte distinta?  

---

## La solución: Spark
Apache Spark aparece para resolver este problema.  
Su idea principal es **distribuir los datos en la RAM de varias máquinas** (un cluster), y que cada máquina (nodo) procese su parte de manera paralela.  

Un cluster tiene:  
- **Nodo maestro (master)**: reparte las tareas.  
- **Nodos trabajadores (workers)**: ejecutan el procesamiento.  

![Cluster de Spark](/spark/spark_cluster.png)

Spark se apoya en el paradigma **MapReduce**, que sigue el principio de “divide y vencerás” para procesar grandes volúmenes de datos.  

---

## Ejemplo simplificado
Imagina que tienes 10 registros:  
- El *worker 1* almacena 4.  
- Los *workers 2, 3 y 4* tienen el resto.  

Si quieres operar solo con los primeros 5 registros, solo trabajarán los workers 1 y 2.  
Al final, Spark junta los resultados y te devuelve un único resultado, sin que tú tengas que preocuparte por cómo se repartieron los datos.  

![Partición Workers](/spark/particion_workers.png)

---

## Más allá de CSV
Spark también incluye optimizaciones:  
- **Formato Parquet**: diseñado para lecturas y escrituras rápidas.  
- **Estrategias de joins y transformaciones**: pensadas para cuando los datos ya no caben en RAM.  

---

## Spark en acción
Spark usa un **grafo acíclico dirigido (DAG)** para organizar las tareas en paralelo.  
Su unidad básica es el **RDD (Resilient Distributed Dataset)**:  
- **R**esilient: si hay un fallo, Spark puede reconstruirlo siguiendo su historial de operaciones.  
- **D**istributed: los datos están repartidos entre varios nodos.  
- **D**ataset: un conjunto de datos.  

Sobre los RDD se construyen abstracciones más fáciles como **DataFrames** y **Datasets**.  

Todo el procesamiento se orquesta a través de un **SparkSession**, que habla con el **SparkDriver** y este con el **Cluster Manager**, que a su vez coordina los **executors** que ejecutan las tareas en cada nodo.  

![Arquitectura Spark](/spark/spark_arquitectura.png)

---

## MapReduce vs Spark
MapReduce fue el primer gran paradigma de procesamiento distribuido, pero Spark lo mejora con su modelo de DAG.  

![MapReduce vs Spark](/spark/mapreduce_vs_spark.png)

---

## ¿Y si no tenemos un cluster en casa?
Montar un sistema distribuido es complejo y costoso.  
Por eso, existen servicios en la nube como **AWS**:  
- **EC2**: procesamiento.  
- **S3**: almacenamiento.  

De esta manera, puedes trabajar con Big Data sin tener que montar tu propio datacenter.  

---

## Conclusión
Apache Spark nació para superar las limitaciones del procesamiento tradicional en una sola máquina.  
Al distribuir los datos y las tareas en múltiples nodos, permite trabajar con volúmenes masivos de información de forma eficiente, escalable y tolerante a fallos.  

En los próximos artículos profundizaremos en cómo usar RDD, DataFrames y Datasets para procesar datos de manera práctica.
