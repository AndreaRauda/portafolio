
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

data = {
    "HORAS_ESTUDIO": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    "SCORE": [
        2, 3, 3, 4, 5, 5, 6, 6, 7, 7,
        8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
        13, 13, 14, 14, 15, 15, 16, 16, 17, 18
    ]
}

df = pd.DataFrame(data)

print("BASE DE DATOS: HORAS DE ESTUDIO Y SCORE")
print(df.to_string(index=False))

min_horas = df["HORAS_ESTUDIO"].min()
max_horas = df["HORAS_ESTUDIO"].max()

min_score = df["SCORE"].min()
max_score = df["SCORE"].max()

print("\nRANGO DE LOS DATOS")
print(f"Horas de estudio: {min_horas} a {max_horas}")
print(f"Score: {min_score} a {max_score}")

X = df[["HORAS_ESTUDIO"]]
y = df["SCORE"]

modelo = LinearRegression()
modelo.fit(X, y)

y_pred = modelo.predict(X)

print("\nRESULTADOS DEL MODELO")
print("Pendiente:", modelo.coef_[0])
print("Intercepto:", modelo.intercept_)
print("R²:", r2_score(y, y_pred))
print("MSE:", mean_squared_error(y, y_pred))

try:
    horas = float(input("\nIngrese las horas de estudio (1 a 30): "))

    if not min_horas <= horas <= max_horas:
        print(
            "Error: el dato ingresado está fuera del rango "
            "disponible en la base de datos."
        )

        if horas > max_horas:
            print(
                f"El valor ingresado ({horas}) es superior "
                f"al máximo disponible: {max_horas} horas."
            )
        elif horas < min_horas:
            print(
                f"El valor ingresado ({horas}) es inferior "
                f"al mínimo disponible: {min_horas} horas."
            )

    else:
        prediccion = modelo.predict(
            pd.DataFrame({"HORAS_ESTUDIO": [horas]})
        )[0]

        print("\nRESULTADO DE LA PREDICCIÓN")
        print(f"Horas de estudio ingresadas: {horas}")
        print(f"Score predicho: {prediccion:.2f}")

        plt.figure(figsize=(10, 6))

        plt.scatter(
            X["HORAS_ESTUDIO"],
            y,
            color="blue",
            label="Datos de la base de datos"
        )

        plt.plot(
            X["HORAS_ESTUDIO"],
            y_pred,
            color="red",
            label="Regresión lineal"
        )

        plt.scatter(
            [horas],
            [prediccion],
            color="green",
            s=120,
            marker="X",
            label="Predicción ingresada"
        )

        plt.xlabel("Horas de estudio")
        plt.ylabel("Score")
        plt.title("Regresión lineal: Horas de estudio vs Score")
        plt.legend()
        plt.grid(True, linestyle="--", alpha=0.5)
        plt.tight_layout()
        plt.show()

except ValueError:
    print("Error: debe ingresar un valor numérico válido.")
