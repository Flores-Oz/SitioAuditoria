# Revisión de coherencia · Operación Trazabilidad

Fecha local: **7 de noviembre de 2026**, Guatemala. Documentos fuente revisados: **27 archivos**, incluidos 3 DOCX, 6 PDF, matrices XLSX/XLSM, el SQL y el mapa causal PNG. Las copias de la presentación se cotejaron por separado. Los originales no fueron modificados.

## Dictamen

**El relato es coherente como trabajo académico preliminar, pero el paquete todavía no está listo para declarar cierre o entrega final completa.** No encontré contradicción en las cifras y horas principales. Sí hay inconsistencias de versión, códigos y puntajes que deben explicarse, y faltan fuentes primarias y anexos citados. Una exposición puede ser clara si separa lo reportado, lo simulado y lo pendiente; no debe prometer que se demostró causa, autoría, fuga, integridad o efectividad productiva.

## Lo que sí coincide

- Las tres representaciones de cronología mantienen 13 eventos y los horarios principales. El análisis del 12–14 de octubre cabe dentro del alcance general del 14 de septiembre al 14 de octubre si se declara como subventana.
- 03:42→08:57 son **315 minutos / 5 h 15 min**; 03:42→09:37, **355 minutos / 5 h 55 min**; 03:18→03:42, **24 minutos**. Son intervalos del relato, no RTO objetivo ni RPO medido.
- **31,840 registros, 216 cambios y 1,600,000,000 bytes (~1.6 GB decimal)** coinciden entre SQL, matriz y transcripción PDF. El caso habla de órdenes modificadas; el laboratorio representa 216 movimientos y 216 órdenes. No deben confundirse con fraude demostrado.
- Las **12 consultas** de la hoja Consultas ejecutadas coinciden con el script, normalizando comentarios y espacios. El DDL contiene **12 tablas y 83 columnas**, como el diccionario.
- El hash del script actual coincide con Evidencias_SQLServer.pdf: `5E7AC7C651866C58777B2F025B174F43B577267C04DB236C826A0D4B4CCC7C3F`.
- La matriz conserva **15 riesgos: 8 críticos y 7 altos**. El Top 5 está empatado en 20/25; el orden es juicio profesional.
- El plan, los diagramas con notas, el Paso 8 y el Paso 10 distinguen hipótesis de hechos comprobados y no confirman exfiltración ni autoría. El laboratorio está rotulado como sintético.

Esta revisión **no volvió a ejecutar SQL Server**. La ejecución anterior está reportada en PDF y matrices; los soportes JSON/CSV originales citados no están incluidos aquí.

## Qué corregir o completar

| Prioridad | Ubicación | Problema concreto | Corrección o respaldo requerido |
| --- | --- | --- | --- |
| REV-01 · Alta | **Fuentes académicas ausentes**<br>Informe Paso 8, Referencias; Paso 10, Fuentes y criterios; matrices y PDF del Paso 3 | Se citan Proyecto Final, Guía de Entregables, Manual_Paso_a_Paso y Asignación de Roles, pero esos originales no aparecen en el paquete revisado. No se pueden contrastar sus páginas, requisitos de extensión o reglas de presupuesto. | Adjuntar los originales o enlaces institucionales/versiones identificables. En cada afirmación indicar documento, sección y página. No usar el resumen como si fuera el log fuente. |
| REV-02 · Media | **Alcance general y ventana del incidente**<br>01_Plan_Auditoria.docx: Período; Informe_Operacion_Trazabilidad.docx §1; Paso_10_Hallazgos, portada | El plan usa 14/09–14/10/2026 y los módulos de Pasos 8/10 usan 12–14/10/2026. Pueden coexistir como alcance general y subventana, pero no se declara consistentemente. | Usar: “Período auditado: 14 sep.–14 oct. 2026. La reconstrucción focaliza los eventos del 12–14 de octubre; la revisión posterior no amplía el período”. |
| REV-03 · Alta | **Versiones y estados de trazabilidad**<br>04_SQL: XLSX frente a XLSM; XLSM Trazabilidad!E2:F13, LEEME!A6 y Revision y pendientes!C4 | La XLSM tiene las 24 celdas R/T llenas; la XLSX las conserva PENDIENTE. La propia XLSM todavía dice que quedan 12 T pendientes. Los resultados y las consultas no cambian. | Elegir una versión de referencia, conservar la otra como anterior y conciliar las notas. La presentación usa la XLSM para los vínculos disponibles, sin dar por aprobado el programa T. |
| REV-04 · Alta | **Programa maestro y dos familias de PT/T**<br>ACTUALIZADO_Control_Calidad!F7,F20; Matrices_Operacion_Trazabilidad.xlsx/Pruebas; Informe Paso 8 §9 | Se afirma que T-01 a T-15 están en Matriz_Riesgos.xlsx, pero ese archivo tiene seis hojas y no contiene ese programa. El Paso 8 usa PT-08-01/T-08-01 etc.; el DOCX resume seis PT-08 y el XLSX desarrolla diez con significados distintos desde PT-08-02. | Adjuntar el programa maestro T-01 a T-15 y aprobar un diccionario de códigos. Ejemplo: el DOCX PT-08-03 es Órdenes; el XLSX PT-08-03 es Egreso. La matriz de correspondencias de esta revisión es temática y no reemplaza la aprobación del equipo. |
| REV-05 · Alta | **Puntajes de riesgos y hallazgos sin conciliación**<br>Matriz_Riesgos.xlsx/filas R-05,R-11,R-13; Paso_10_Hallazgos/H-02,H-03,H-05 | R-05=20 y H-02=16; R-11=16 y H-03=15; R-13=20 y H-05=12. No son automáticamente errores si evalúan objetos o momentos distintos, pero el Paso 10 también los llama riesgo inherente preliminar y falta explicar la diferencia. | Aprobar una valoración común o justificar expresamente las diferencias de objeto, evidencia y fecha. Mantener separados el Top 5 de riesgos y los cinco hallazgos; no tratarlos como la misma lista. |
| REV-06 · Alta | **Certeza de los hallazgos**<br>Paso_10_Hallazgos/resumen H-01 a H-03; ACTUALIZADO_Papeles_Trabajo/PT-02,PT-06,PT-07!B22 | Tres hallazgos se llaman “Observación sustentada”, mientras los papeles siguen NO CONCLUYENTE y no hay registros originales. Las limitaciones del propio Paso 10 reducen el riesgo de sobreafirmación, pero el resumen se puede interpretar como prueba productiva. | Rotular: “Observación preliminar sustentada en el resumen académico; no incumplimiento productivo confirmado”. Conservar las causas como hipótesis y anexar criterio interno antes de cerrar incumplimiento. |
| REV-07 · Alta | **Soportes reproducibles del laboratorio no incluidos**<br>INFORME_VERIFICACION.pdf pp.1–2; Evidencias_SQLServer.pdf; matriz SQL/Validacion SQL e Indice evidencias | Los PDF y matrices reportan ejecución en SQL Server, pero no están los CSV, JSON de verificación, consultas individuales ni scripts auxiliares a los que remiten. El SQL principal sí está y su SHA-256 coincide con el PDF. | Incluir los soportes citados, con su manifiesto de hashes y ruta final. No incluir .env ni credenciales. Esta revisión contrastó consultas y documentos; no volvió a ejecutar SQL Server. |
| REV-08 · Alta | **Capturas SSMS pendientes**<br>Matriz SQL/Indice evidencias y Lista de entrega; control de calidad actualizado!F12,F21 | No se encontraron SQL-01.png a SQL-12.png ni VOLUMEN.png. Evidencias_SQLServer.pdf se identifica correctamente como transcripción .NET, no captura de SSMS. | Generar las 13 capturas legibles en el laboratorio y actualizar el índice. Confirmar la exigencia exacta con la guía académica original, todavía ausente. |
| REV-09 · Alta | **Plan de acción no integrado**<br>Carpeta 05_PlanAccion; Informe Paso 8 §10; control de calidad!D13 y F14 | 05_PlanAccion está vacía. Hay recomendaciones y horizontes propuestos, pero no un plan final con responsables, costos, plazos, KPI y evidencia de cierre. Q350,000 es un techo citado por el control de calidad, no un gasto aprobado. | Crear el plan del Paso 11, vinculado a H/R, con responsables por función, fecha, costo, KPI, meta, prueba de cierre y aprobación. Referenciar el origen académico del límite presupuestario. |
| REV-10 · Media | **Criterios concretos ausentes de la matriz normativa**<br>ACTUALIZADO_Matriz_Referencias_Normativas_Paso9/Matriz normativa; Paso_10_Hallazgos/criterios | El Paso 10 usa NIST SP 800-53 Rev. 5, catálogo 5.2.0, pero esa referencia no figura entre las diez entradas de la matriz normativa. Los marcos generales no especifican por sí solos la política aplicable. | Añadir SP 800-53 y sus controles por hallazgo; para MFA resistente a phishing añadir, si se mantiene esa recomendación, SP 800-63B-4 §3.2.5. Separar recomendación técnica de obligación contractual o legal. |
| REV-11 · Media | **Índice de papeles desactualizado**<br>ACTUALIZADO_Papeles_Trabajo_PT01_PT10.xlsx/Resumen!F5:G14 frente a cada PT!B10:B11 | El Resumen deja todos los R/T pendientes aunque cada hoja PT ya tiene vínculos temáticos. Esto puede hacer que el expositor dé dos respuestas distintas según la pestaña que abra. | Sincronizar el índice con las hojas de detalle y etiquetar los vínculos como propuestos hasta aprobar el programa maestro. No cambiar el estado de ejecución por completar un código. |
| REV-12 · Media | **Referencias temáticas imprecisas en privacidad e IA**<br>ACTUALIZADO_Paso9/Evaluacion_Privacidad!I6,I9:I14; Riesgos_IA!D6 | La autorización móvil apunta solo a R-07/T-07; SIEM y chatbot también repiten R-07/T-07. En I11:I14 hay referencias sin proceso. IA-04 describe permisos en vez de la prueba de entradas engañosas. | Conservar R-07 para privacidad y añadir, según el objetivo, R-04 para autorización, R-09/R-11 para logs/alertas y R-14 para IA. Eliminar filas sin proceso o completarlas. Corregir D6 a “prueba de entradas maliciosas no ejecutada”. |
| REV-13 · Media | **Registro de uso de IA vacío**<br>07_UsodeIA/ACTUALIZADO_Registro_Uso_IA_Operacion_Trazabilidad.xlsx/Registro de uso de IA | Las veinte filas solo tienen número. Hay declaraciones de asistencia de IA y esta conversación acredita usos concretos, pero no una revisión humana ya aprobada. | Registrar únicamente usos reales y dejar la validación humana como pendiente cuando corresponda. Se adjunta un CSV con tres usos observables en esta conversación; no se atribuyen usos a otros integrantes. |
| REV-14 · Alta | **Falta consolidar el informe general**<br>01_Informe/Informe_Operacion_Trazabilidad.docx, portada PASO 8; Paso_10_Hallazgos | El documento llamado Informe_Operacion_Trazabilidad es el módulo de reconstrucción y continuidad (Paso 8), no un informe general que integre plan, riesgos, pruebas, hallazgos, acciones y conclusión. No se puede certificar la extensión del informe final a partir de estos módulos. | Compilar una versión final con índice, alcance general, metodología, resumen de resultados, hallazgos, plan de acción, limitaciones y anexos. Confirmar extensión y formato contra la guía original. |
| REV-15 · Media | **Leyenda y flechas del mapa causal**<br>Mapa_Causal_Paso8.png; Informe Paso 8 §4 y leyenda | El PNG aislado no incorpora la leyenda. El enlace 04:05→08:57 aparece discontinuo/ámbar aunque describe sucesión de recuperación; el texto reserva ese estilo para relaciones causales hipotéticas. | Incluir la leyenda en el gráfico y distinguir sucesión temporal de hipótesis causal. La página conserva la advertencia y no transforma una flecha en una causa demostrada. |

## Conciliación de riesgos y hallazgos

La correspondencia siguiente es temática, propuesta por esta revisión y pendiente de aprobación del equipo. No se inventó un nuevo resultado de prueba ni se cambió un puntaje original.

| Hallazgo | Riesgo relacionado | Puntaje de riesgo | Puntaje del Paso 10 | Papel y evidencia |
| --- | --- | --- | --- | --- |
| H-01 | R-03 | 20/25 | 20/25 | PT-02 · E-02 |
| H-02 | R-05 | 20/25 | 16/25 | PT-06 · E-06 |
| H-03 | R-11 | 16/25 | 15/25 | PT-07 · E-07 |
| H-04 | R-08 | 20/25 | 20/25 | PT-08 · E-08 |
| H-05 | R-13 | 20/25 | 12/25 | PT-05 · E-05 |

H-01 y H-04 conservan el puntaje de su riesgo relacionado. H-02, H-03 y H-05 requieren conciliación explícita. El Top 5 de riesgos incluye clasificación de datos R-07; el conjunto H-01 a H-05 incluye alerta SIEM H-03 y no tiene un hallazgo equivalente de clasificación. **Son conjuntos distintos**, no cinco nombres para la misma lista.

El DOCX del Paso 8 y su XLSX también usan PT-08-xx con una descomposición diferente. Conservar esos códigos como un espacio de nombres de módulo hasta que el equipo apruebe la equivalencia; PT-08 (respaldos, inventario general) no es lo mismo que PT-08-01 (accesos del módulo Paso 8).

## Referencias que faltan y cómo citarlas

1. **Fuentes del caso:** añadir Proyecto Final, Guía de Entregables, Manual_Paso_a_Paso y Asignación de Roles. Las referencias a páginas del caso son de segunda mano mientras esos originales no estén disponibles.
2. **Criterios por hallazgo:** H-01: IA-2(1)/(2); H-02: CM-3; H-03: IR-4/IR-5; H-04: CP-4/CP-9/CP-10; H-05: SI-7/AU-12. Son los controles propuestos en el Paso 10; el equipo debe documentar su selección y el criterio interno o contractual aplicable. El catálogo 5.2.0 sí existe: [anuncio oficial de NIST](https://csrc.nist.gov/news/2025/nist-releases-revision-to-sp-800-53-controls). Añadirlo a la matriz normativa, no solo al DOCX.
3. **MFA resistente a phishing:** si se conserva esa recomendación, respaldarla con [NIST SP 800-63B-4, sección 3.2.5](https://pages.nist.gov/800-63-4/sp800-63b.html#phishing). La selección del nivel de aseguramiento requiere criterio aprobado; no convertir la referencia en una obligación legal automática de RedNova.
4. **Respuesta a incidentes:** la referencia SP 800-61 Rev. 3 es pertinente y su edición final es de abril de 2025, según [NIST](https://csrc.nist.gov/pubs/sp/800/61/r3/final). Usar capítulo/subcategoría pertinente en el análisis, además de la bibliografía.
5. **Marcos generales:** ITAF 5.ª edición y OWASP Top 10:2025 aparecen en sus [fuentes oficiales de ISACA](https://www.isaca.org/resources/it-audit) y [OWASP](https://top10.owasp.org/2025/es/). No basta mencionarlos: señalar qué disposición guía qué prueba. La consulta de una página pública no equivale a revisar el texto íntegro de ITAF/ISO/COBIT.
6. **IA:** mantener AI RMF 1.0 identificado con versión y fecha. [NIST indica que está en revisión](https://www.nist.gov/itl/ai-risk-management-framework); no citar una revisión futura como publicada ni asumir que el chatbot es generativo.
7. **Políticas del caso:** anexar política MFA/excepciones, gestión de cambios, SLA de atención de alertas, periodicidad de restauración, BIA/RTO/RPO y conciliación financiera. Sin esos criterios no se puede declarar incumplimiento definitivo.
8. **Referencias jurídicas:** mantener la aplicabilidad condicionada ya advertida en la matriz. No presentar marcos técnicos como leyes ni extender automáticamente la LAIP a toda empresa privada. La revisión de enlaces confirma acceso HTTP, no vigencia, aplicabilidad o contenido jurídico completo.

Se probaron doce enlaces públicos: once respondieron HTTP 200 y la página de ISO devolvió HTTP 403 al lector automatizado. Esto último **no demuestra que el enlace esté roto**. La comprobación y sus límites están en `Verificacion_Enlaces.json`; no sustituye la revisión del texto y artículo concreto.

## Guía para exponer sin perderse

1. **Alcance:** “Auditamos 14 sep.–14 oct.; investigamos de forma focal el incidente del 12–14 de octubre”.
2. **Riesgos:** “Identificamos 15 escenarios y priorizamos 5; todavía no reducimos el riesgo residual”.
3. **Reconstrucción:** “Hay 13 eventos declarados y 2 hipótesis abiertas; la secuencia no prueba causalidad”.
4. **Laboratorio:** “Hay 12 consultas sobre datos sintéticos; sus resultados no autentican eventos productivos”.
5. **Hallazgos:** “El Paso 10 propone 5 observaciones, distintas del Top 5 de riesgos; su certeza y puntuación requieren conciliación”.
6. **Cierre:** “Faltan soportes originales, programa y trazabilidad aprobados, capturas, plan de acción e informe general integrado”.

Evitar: “se confirmó el ataque de ext_ops_04”, “se fugaron 1.6 GB”, “el despliegue causó la caída”, “se incumplió el RTO”, “los 216 cambios fueron fraudulentos” y “las pruebas T ya se ejecutaron”. Ninguna de esas afirmaciones está suficientemente respaldada por este paquete.

## Entregables de esta revisión

- `Revision_Datos.json`: inventario con hashes, comprobaciones, incidencias y cinco hallazgos extraídos del DOCX.
- `Matriz_Trazabilidad_Revision.csv`: relaciones temáticas SQL/R/T/E/PT/H y diferencias de puntaje.
- `Registro_Asistencia_IA.csv`: tres usos de IA observables en esta conversación, con aceptación humana pendiente.
- Presentación actualizada con módulos de Paso 8/10, documentos actuales y sección de coherencia. Las incidencias de los documentos originales permanecen abiertas hasta que el equipo las concilie.

No se certifica autenticidad forense, conformidad normativa integral, revisión por otro integrante ni cumplimiento de la extensión final del informe.
