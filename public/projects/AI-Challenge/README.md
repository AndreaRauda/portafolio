
# AI Challenge: K-Means y KNN

## Descripción
Proyecto académico de Machine Learning desarrollado en Python que utiliza los algoritmos K-Means y K-Nearest Neighbors (KNN) para analizar datos de estudiantes y realizar clasificaciones según su rendimiento académico.

## Tecnologías utilizadas
- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn

## Funcionamiento

1. Genera un conjunto de datos de ejemplo con 500 registros.
2. Analiza las horas de estudio, asistencia, tareas y notas.
3. Aplica K-Means para agrupar los datos en 3 y 4 grupos.
4. Implementa KNN para clasificar estudiantes como aprobados o reprobados.
5. Compara los resultados con datos normalizados y sin normalizar.
6. Evalúa diferentes valores de K mediante la exactitud.
7. Realiza una predicción para un nuevo estudiante.
8. Presenta gráficas y tablas comparativas.

## Resultados
- Mejor valor de K: 21.
- Exactitud con normalización: 92 %.
- Exactitud sin normalización: 69.6 %.

## Instalación

Instala las dependencias:

```bash
pip install -r requirements.txt
```

## Ejecución

```bash
python ai_challenge.py
```

## Nota
Los datos son generados artificialmente mediante NumPy y tienen fines académicos y demostrativos. Los resultados no representan evaluaciones reales de estudiantes.
