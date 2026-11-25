
# Laberinto Procedural: DFS vs BFS

## Descripción
Juego desarrollado en Python utilizando Pygame. Genera laberintos aleatorios mediante el algoritmo DFS (Depth-First Search) y utiliza BFS (Breadth-First Search) para encontrar el camino más corto hacia la salida.

## Características
- Generación procedural de laberintos.
- Movimiento mediante teclado.
- Contador de pasos realizados.
- Cálculo de la distancia mínima.
- Sistema de pistas con el algoritmo BFS.
- Generación de nuevos laberintos en cada partida.

## Tecnologías
- Python
- Pygame
- Random
- Collections (deque)

## Controles
- Flechas o WASD: mover al jugador.
- H: mostrar una pista durante 3 segundos.
- R: reiniciar el laberinto.
- Enter: jugar nuevamente después de ganar.

## Instalación
1. Instalar Python.
2. Instalar las dependencias:

   pip install -r requirements.txt

3. Ejecutar:

   python laberinto.py

## Algoritmos
**DFS:** genera el laberinto mediante exploración y retroceso.

**BFS:** encuentra la ruta más corta desde la posición del jugador hasta la meta.
