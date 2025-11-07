GEMINI_PENTAHO

MEGA PROMPT — Generador Universal de Sitio Web Académico para Pentaho (HTML/CSS/JS + CDNs)
Versión: 1.0
Diseñado para: Gemini CLI, ChatGPT, Claude u otra IA generadora de código
Salida esperada: Sitio web completo (HTML/CSS/JS), estructura de archivos, textos académicos basados en el proyecto de Bases de Datos Analíticas con Pentaho.
Idiomas: Español e Inglés
Modo: Automático (pero se puede elegir manual)

✅ INSTRUCCIONES DE USO (rápido)

Pega este Mega Prompt en Gemini CLI.
Luego responde a las 5 preguntas iniciales:

Nombre del proyecto

Link del repositorio GitHub

Idiomas (usar: es,en)

Modo (auto o manual)

Paleta de colores HEX (si modo = manual)

La IA debe devolver un solo documento grande en Markdown, conteniendo TODO el contenido estructurado para generar las páginas del proyecto final.

✅ MEGA PROMPT (PÉGALO ENTERO EN GEMINI CLI)

Actúa como un arquitecto de sitios web académicos premium, especializado en proyectos universitarios de informática.
Tu tarea es generar un sitio web completo, profesional, claro y académico basado estrictamente en el documento:
“Informe Final Formativo: Desarrollo de Sitio Web para Bases de Datos Analítica con Pentaho”.

El sitio debe incluir cuatro páginas principales:

Inicio: Pentaho, OLAP, cubos, flujos de datos, ETL

Ejercicios Realizados: descripción, entradas/salidas, uso de GitHub

Visualización Gráfica: gráficos hechos con HTML/CSS/JS

Créditos: datos del equipo

El resultado final debe cumplir los criterios de evaluación oficiales del trabajo, incluyendo:

Explicación clara y completa

Ejercicios explicados con claridad y enlaces correctos

Gráficos interactivos con explicación técnica

Navegación intuitiva

Redacción profesional

Presentación académica impecable

✅ FASE 1 — Preguntas Iniciales (OBLIGATORIO)

Haz SOLO estas preguntas en una sola línea, sin explicación adicional:

“Nombre del proyecto:”

“URL del repositorio GitHub:”

“Idiomas (es,en):”

“Modo (auto/manual):”

“Si manual → Paleta HEX (3 colores):”

Cuando te responda, procede a la Fase 2.

✅ FASE 2 — GENERACIÓN COMPLETA DEL SITIO

Al recibir mis respuestas, genera un único bloque de Markdown con todo lo siguiente:

✅ A) Resumen creativo del sitio

Incluye:

Nombre final del proyecto

Tipo de sitio: académico / formativo

Objetivo general

Audiencia

Propuesta de valor

Tono (académico-profesional)

✅ B) Paleta, tipografías y assets

Debes incluir:

Paleta HEX (3 colores) — usar automática si no se especifica

2 tipografías Google Fonts (títulos y cuerpo)

Icon pack: FontAwesome CDN

✅ C) Stack y CDNs (lista exacta de links)

Incluye exactamente estos:

TailwindCSS CDN

AOS (animaciones)

Chart.js (para gráficos)

Smooth Scroll CDN

FontAwesome CDN

Script base para el sitio

Incluye un HEAD completo con SEO básico, og-tags e i18n (es/en).

✅ D) Estructura de Archivos

Genera un árbol como:

/
|— index.html
|— ejercicios.html
|— graficos.html
|— creditos.html
|— /assets
     |— /css/styles.css
     |— /js/main.js
     |— /js/graficos.js
     |— /img/

✅ E) PÁGINAS COMPLETAS (Home, Ejercicios, Gráficos, Créditos)

Por cada página debes generar:

✔ 1. Prompt técnico especial

Un prompt listo para pedirle a la IA que genere la página completa en HTML/CSS/JS.

✔ 2. 10 secciones completas por página

Cada sección debe tener:

Título

Propósito

Texto académico (ES/EN)

Elementos HTML obligatorios

Notas técnicas

Microanimaciones

2 imágenes sugeridas (Unsplash/Pexels)

✔ 3. Todo el contenido basado 100% en el PDF del trabajo

Incluye:

Qué es Pentaho

Qué es un cubo OLAP

Cómo se crean cubos en Pentaho

Qué es un flujo ETL

Descripción de ejercicios

Instrucciones de uso de GitHub

Ejemplos de código

Explicaciones de gráficos

✅ F) Contenido académico

Escribe versiones completas listas para copiar y pegar en:

Hero Text

Secciones informativas

Explicación de gráficos

Descripción de ejercicios

Créditos y agradecimientos

Todo bilingüe (es/en).

✅ G) Snippets de código listos para producción

Incluye:

Navbar responsiva

Footer

Hero section en Tailwind

Ejemplo de gráfico con Chart.js

Init AOS

Smooth scroll init

Validación de formulario simple

✅ H) Checklist de QA según rúbrica del docente

Incluye:

SEO

Accesibilidad

Performance

Revisión académica

Navegación

Calidad de redacción

Aspectos visuales

✅ I) COPY & PASTE PROMPT FINAL

Al final, coloca:

“Genera todos los archivos .html, .css y .js de este sitio web conforme a la estructura definida, usando los textos académicos, gráficos, imágenes y CDNs sugeridos. Dame cada archivo por separado y un ZIP final.”

FIN DEL MEGA PROMPT