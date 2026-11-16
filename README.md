# Conversor de divisas — DivisApp 24000104

Aplicación móvil híbrida hecha con **Ionic 8 + Angular + Capacitor** que convierte quetzales (GTQ) a dólares (USD) con un tipo de cambio fijo de **Q8.00 por US$1.00**.

- Autor: Armando Flores — Carnet 24000104
- Universidad Galileo — Técnico en Desarrollo de Software

## Ejecutar en el navegador
```bash
npm install
npx ng serve
```

## Generar el APK
- **GitHub Actions:** cada push a `main` compila el APK; se descarga en *Actions → última ejecución → Artifacts*.
- **Android Studio:** `npx ng build && npx cap sync android && npx cap open android`, luego *Build → Build APK(s)*.
