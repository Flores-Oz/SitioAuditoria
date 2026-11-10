window.AUDITORIA = {
  "risks": [
    {
      "id": "R-01",
      "rank": null,
      "layer": "Infrastructure / Domain",
      "asset": "Ciclo de vida de identidades",
      "risk": "Acceso no autorizado mediante cuentas de personas desvinculadas que permanezcan activas.",
      "probability": 4,
      "impact": 4,
      "score": 16,
      "level": "Crítico",
      "control": "Baja oportuna, conciliación RR. HH.–IAM y recertificación de cuentas.",
      "owner": "Identidad / RR. HH. (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-02",
      "rank": null,
      "layer": "Infrastructure",
      "asset": "Cuentas privilegiadas",
      "risk": "Pérdida de atribución y uso indebido de privilegios por cuentas administrativas compartidas.",
      "probability": 4,
      "impact": 4,
      "score": 16,
      "level": "Crítico",
      "control": "Cuentas nominativas, gestor de privilegios y revisión de actividad individual.",
      "owner": "Identidad / Seguridad (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-03",
      "rank": 1,
      "layer": "Infrastructure / Integrations",
      "asset": "Acceso remoto privilegiado / VPN",
      "risk": "Ingreso privilegiado no suficientemente protegido si MFA no cubre accesos externos.",
      "probability": 4,
      "impact": 5,
      "score": 20,
      "level": "Crítico",
      "control": "MFA obligatorio para todo acceso privilegiado, revisión de excepciones y sesiones.",
      "owner": "Seguridad / Identidad (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-04",
      "rank": null,
      "layer": "UI/API / Application",
      "asset": "Aplicación móvil, API y CRM",
      "risk": "Consulta o modificación de datos ajenos al perfil por autorización insuficiente entre canales.",
      "probability": 3,
      "impact": 5,
      "score": 15,
      "level": "Alto",
      "control": "Autorización por objeto y rol, denegación por defecto y pruebas negativas.",
      "owner": "Desarrollo / Seguridad de aplicaciones (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-05",
      "rank": 5,
      "layer": "Application / Integrations",
      "asset": "Cambios del servicio de integración",
      "risk": "Despliegue no controlado que introduzca fallos o altere procesos por aprobación y pruebas no documentadas.",
      "probability": 4,
      "impact": 5,
      "score": 20,
      "level": "Crítico",
      "control": "Aprobación formal, pruebas previas, segregación y reversión documentada.",
      "owner": "Desarrollo / Gestión de cambios (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-06",
      "rank": null,
      "layer": "Integrations / Infrastructure",
      "asset": "Proveedor cloud y subcontratistas",
      "risk": "Controles de terceros insuficientes por subcontratistas fuera de evaluación y cobertura SOC 2 incompleta.",
      "probability": 3,
      "impact": 4,
      "score": 12,
      "level": "Alto",
      "control": "TPRM por servicio y subcontratista; revisión del alcance SOC 2 y contrato.",
      "owner": "Compras / Riesgos de terceros (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-07",
      "rank": 3,
      "layer": "Data / Domain",
      "asset": "Datos personales de clientes",
      "risk": "Tratamiento y exposición no controlados de datos personales sin clasificación formal verificable.",
      "probability": 4,
      "impact": 5,
      "score": 20,
      "level": "Crítico",
      "control": "Clasificación e inventario de datos, mínimo privilegio, cifrado y monitoreo de flujos.",
      "owner": "Gobierno de datos / Seguridad (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-08",
      "rank": 2,
      "layer": "Infrastructure / Data",
      "asset": "Respaldos y recuperación CRM",
      "risk": "Imposibilidad de recuperar íntegra y oportunamente información si los respaldos no se restauran y verifican.",
      "probability": 4,
      "impact": 5,
      "score": 20,
      "level": "Crítico",
      "control": "Pruebas periódicas de restauración, integridad, RTO/RPO derivados del BIA.",
      "owner": "Continuidad / Operaciones TI (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-09",
      "rank": null,
      "layer": "Infrastructure / Data",
      "asset": "Bitácoras de auditoría",
      "risk": "Pérdida de integridad o disponibilidad de logs si administradores pueden alterarlos o eliminarlos.",
      "probability": 3,
      "impact": 5,
      "score": 15,
      "level": "Alto",
      "control": "Segregación, envío inmutable de logs, retención y revisión de permisos.",
      "owner": "Seguridad / Operaciones TI (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-10",
      "rank": null,
      "layer": "Domain / Infrastructure",
      "asset": "BIA y continuidad del negocio",
      "risk": "Recuperación desalineada con necesidades de negocio por BIA y planes desactualizados.",
      "probability": 3,
      "impact": 5,
      "score": 15,
      "level": "Alto",
      "control": "BIA vigente, RTO/RPO aprobados y simulacros con conciliación.",
      "owner": "Continuidad / Gerencia (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-11",
      "rank": null,
      "layer": "Infrastructure",
      "asset": "Monitoreo y respuesta SIEM",
      "risk": "Detección o escalamiento tardío si alertas críticas no se investigan y cierran con evidencia.",
      "probability": 4,
      "impact": 4,
      "score": 16,
      "level": "Crítico",
      "control": "Procedimiento de triage, dueño, SLA interno de atención y cierre verificable.",
      "owner": "Seguridad / SOC (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-12",
      "rank": null,
      "layer": "Data / Integrations",
      "asset": "Flujo de datos hacia destino externo",
      "risk": "Transferencia no autorizada de datos por falta de clasificación y trazabilidad del tráfico saliente.",
      "probability": 3,
      "impact": 5,
      "score": 15,
      "level": "Alto",
      "control": "Inventario de destinos, clasificación de tráfico, autorización y correlación de logs.",
      "owner": "Seguridad / Nube (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-13",
      "rank": 4,
      "layer": "Domain / Data / Integrations",
      "asset": "Órdenes CRM y facturación ERP",
      "risk": "Órdenes alteradas o no conciliadas que produzcan errores de facturación e integridad transaccional.",
      "probability": 4,
      "impact": 5,
      "score": 20,
      "level": "Crítico",
      "control": "Autorización de cambios, historial antes/después y conciliación CRM–ERP.",
      "owner": "Ventas / Finanzas / TI (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-14",
      "rank": null,
      "layer": "Application / Integrations",
      "asset": "Chatbot con IA y API",
      "risk": "Respuesta errónea o divulgación de datos por falta de evaluación de privacidad, exactitud y supervisión.",
      "probability": 3,
      "impact": 4,
      "score": 12,
      "level": "Alto",
      "control": "Evaluación IA, permisos, pruebas de exactitud, logging y revisión humana.",
      "owner": "Producto IA / Privacidad (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    },
    {
      "id": "R-15",
      "rank": null,
      "layer": "Domain / Governance",
      "asset": "Comité de Riesgos y supervisión",
      "risk": "Priorización y seguimiento deficientes si faltan indicadores consolidados de ciberseguridad y terceros.",
      "probability": 3,
      "impact": 4,
      "score": 12,
      "level": "Alto",
      "control": "KRIs/KPIs consolidados, revisión periódica y decisiones de riesgo documentadas.",
      "owner": "Comité de Riesgos (simulado)",
      "limitation": "Riesgo hipotético del caso; no equivale a hallazgo. Falta contraste del control y evidencia fuente."
    }
  ],
  "tests": [
    {
      "id": "T-01",
      "risk": "R-01",
      "coverage": "ITGC · accesos",
      "control": "Baja y recertificación de cuentas",
      "procedure": "Comparar bajas de RR. HH. con estado y última sesión en IAM; rastrear cada cuenta que siga activa hasta su desactivación y aprobación de excepción.",
      "sample": "Todas las bajas del período; si son >30, muestra dirigida de 30 más todas las excepciones.",
      "expected": "E-01: bajas, export IAM, sesiones, tickets y recertificación con fechas.",
      "criterion": "Política simulada de baja y plazos, por aprobar; NIST CSF 2.0, PROTECT.",
      "sql": [
        "SQL-01"
      ],
      "papers": [
        "PT-01"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "SQL sintético solo ilustra consulta; origen, completitud y fechas de IAM/RR. HH. por obtener.",
      "indexed_papers": [
        "PT-01"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-02",
      "risk": "R-02",
      "coverage": "ITGC · segregación",
      "control": "Cuentas privilegiadas individuales",
      "procedure": "Conciliar inventario de administradores con identidades nominativas; revisar cuentas genéricas, custodios, bóveda y registros de uso para atribución individual.",
      "sample": "Censo de cuentas privilegiadas; 5 sesiones por cuenta compartida si existen.",
      "expected": "E-01: inventario de privilegios, asignaciones, bóveda, sesiones y aprobaciones.",
      "criterion": "Política simulada de acceso privilegiado y segregación, por aprobar; NIST CSF 2.0, PROTECT.",
      "sql": [
        "SQL-02"
      ],
      "papers": [
        "PT-01"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Cuenta compartida de laboratorio no demuestra uso productivo ni ausencia de trazabilidad compensatoria.",
      "indexed_papers": [
        "PT-01"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-03",
      "risk": "R-03",
      "coverage": "ITGC · acceso remoto",
      "control": "MFA en todo acceso remoto privilegiado",
      "procedure": "Cruzar configuración IAM/VPN, grupos privilegiados, excepciones y sesiones exitosas; identificar accesos sin MFA y verificar autorización, vigencia y trazabilidad.",
      "sample": "Censo de grupos privilegiados y sesiones del período; todas las sesiones sin MFA.",
      "expected": "E-02: política/configuración MFA, export VPN/IdP, excepciones y tickets.",
      "criterion": "Política simulada MFA para acceso privilegiado, por aprobar; NIST CSF 2.0, PROTECT.",
      "sql": [
        "SQL-03",
        "SQL-11"
      ],
      "papers": [
        "PT-02"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "La sesión sintética sin MFA no atribuye actor ni causa; horario solo se evalúa contra política aprobada.",
      "indexed_papers": [
        "PT-02"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-04",
      "risk": "R-04",
      "coverage": "Aplicaciones · autorización",
      "control": "Autorización por objeto y rol en móvil/API/CRM",
      "procedure": "En entorno de laboratorio con identidades ficticias de dos perfiles, repetir consulta y edición de objetos propios/ajenos; comprobar denegación en UI y API, y registrar respuesta y auditoría.",
      "sample": "Dos roles, dos clientes ficticios y operaciones lectura/edición; todas las rutas críticas identificadas.",
      "expected": "E-01/E-05: matriz roles-permisos, casos de prueba, respuestas API y logs de autorización.",
      "criterion": "Matriz de permisos simulada por aprobar; NIST CSF 2.0, PROTECT.",
      "sql": [],
      "papers": [
        "PT-01",
        "PT-05"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Rutas exactas del diagrama son hipótesis; no efectuar prueba intrusiva en producción.",
      "indexed_papers": [],
      "paper_conflict": true
    },
    {
      "id": "T-05",
      "risk": "R-05",
      "coverage": "ITGC · cambios y desarrollo",
      "control": "Aprobación, pruebas y reversión antes de despliegue",
      "procedure": "Conciliar despliegues CI/CD con ticket, aprobación previa, pruebas, segregación y plan de reversión; ordenar marcas de tiempo y entrevistar mediante guion simulado sobre excepciones.",
      "sample": "Todos los despliegues relacionados con CRM/integración del período; mínimo 5 o censo si menos.",
      "expected": "E-06: tickets, aprobaciones, pipeline, resultados de prueba y bitácora de despliegue.",
      "criterion": "Procedimiento simulado de cambios por aprobar; NIST CSF 2.0, PROTECT.",
      "sql": [
        "SQL-06"
      ],
      "papers": [
        "PT-06"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Aprobación no documentada no equivale a ausencia absoluta; secuencia temporal no prueba causalidad.",
      "indexed_papers": [
        "PT-06"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-06",
      "risk": "R-06",
      "coverage": "TPRM · nube",
      "control": "Evaluación de subcontratistas y cobertura contractual",
      "procedure": "Comparar inventario de servicios/subcontratistas con contrato, SLA, responsabilidad compartida y alcance SOC 2; registrar exclusiones y dueño de cada control.",
      "sample": "Censo de servicios cloud contratados y subcontratistas declarados.",
      "expected": "E-09: contrato/anexos, listado de terceros, alcance SOC 2, SLA y evaluación TPRM.",
      "criterion": "Contrato/SLA simulados sujetos a validación; NIST CSF 2.0, GOVERN.",
      "sql": [],
      "papers": [
        "PT-09"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "No presumir incumplimiento ni responsabilidad exclusiva sin cláusulas y alcance aplicables.",
      "indexed_papers": [
        "PT-09"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-07",
      "risk": "R-07",
      "coverage": "Datos · privacidad",
      "control": "Inventario y clasificación de datos personales",
      "procedure": "Comparar diccionario, tablas y flujos con clasificación aprobada; revisar permisos/cifrado sobre campos personales y contrastar lectura masiva con sesión y finalidad autorizada.",
      "sample": "Tablas y flujos de clientes críticos; censo de campos personales identificados.",
      "expected": "E-03/E-04: diccionario, inventario, matriz de clasificación, permisos, logs y autorizaciones.",
      "criterion": "Política simulada de clasificación por aprobar; NIST CSF 2.0, IDENTIFY/PROTECT.",
      "sql": [
        "SQL-04",
        "SQL-09"
      ],
      "papers": [
        "PT-03",
        "PT-04"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "31,840 filas y 1.6 GB son señales; no prueban exposición ni exfiltración.",
      "indexed_papers": [
        "PT-03",
        "PT-04"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-08",
      "risk": "R-08",
      "coverage": "ITGC · respaldo/recuperación",
      "control": "Restauración íntegra contra objetivos aprobados",
      "procedure": "Revisar programación, resultados, integridad y ensayo de restauración; en laboratorio restaurar copia sintética y conciliar conteos/hash con respaldo; comparar duración con BIA.",
      "sample": "CRM y SQL críticos; último respaldo y todas las pruebas de restauración del período.",
      "expected": "E-08: política, catálogo, bitácoras, reporte de restauración, conciliación y BIA.",
      "criterion": "BIA/RTO/RPO y política simulados por aprobar; NIST CSF 2.0, RECOVER.",
      "sql": [
        "SQL-08",
        "SQL-12"
      ],
      "papers": [
        "PT-08"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "90 días y 24 h son umbrales de laboratorio, no criterios empresariales; no afirmar RTO/RPO.",
      "indexed_papers": [
        "PT-08"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-09",
      "risk": "R-09",
      "coverage": "ITGC · bitácoras",
      "control": "Integridad y retención de logs",
      "procedure": "Comparar permisos de administradores sobre logs SQL/SIEM con roles permitidos; probar en laboratorio copia inmutable/alerta ante intento de alteración y cotejar retención documentada.",
      "sample": "Censo de roles con borrar/modificar logs; 3 eventos sintéticos de cambio.",
      "expected": "E-07: ACL/configuración, política de retención, logs de prueba y alertas.",
      "criterion": "Política simulada de logs y retención por aprobar; NIST CSF 2.0, DETECT.",
      "sql": [],
      "papers": [
        "PT-07"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "No ejecutar alteraciones sobre bitácoras reales; permisos productivos aún no autenticados.",
      "indexed_papers": [
        "PT-07"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-10",
      "risk": "R-10",
      "coverage": "Continuidad · BIA",
      "control": "BIA vigente y objetivos consistentes",
      "procedure": "Comparar BIA, criticidad CRM/ERP, escenarios, dependencias, aprobación y fecha de revisión con planes de continuidad; verificar que RTO/RPO definidos se reflejen en pruebas.",
      "sample": "Censo de procesos críticos ventas/facturación y sistemas soporte.",
      "expected": "E-08: BIA, plan de continuidad, actas de aprobación y ejercicios.",
      "criterion": "BIA/política de continuidad simulados por aprobar; NIST CSF 2.0, IDENTIFY/RECOVER.",
      "sql": [],
      "papers": [
        "PT-08"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Duración observada de indisponibilidad no es RTO objetivo ni permite inferir RPO.",
      "indexed_papers": [
        "PT-08"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-11",
      "risk": "R-11",
      "coverage": "ITGC · monitoreo",
      "control": "Triage, escalamiento y cierre de alertas",
      "procedure": "Rastrear alertas críticas desde recepción hasta asignación, investigación, escalamiento y cierre; comparar tiempos con procedimiento y verificar evidencia de resolución.",
      "sample": "Censo de alertas críticas del período; todas las abiertas y muestra de 10 cerradas.",
      "expected": "E-07: alertas SIEM, casos/tickets, timestamps, evidencia de cierre y procedimiento.",
      "criterion": "Procedimiento simulado de respuesta y plazos por aprobar; NIST CSF 2.0, DETECT/RESPOND.",
      "sql": [
        "SQL-07"
      ],
      "papers": [
        "PT-07"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Ausencia de cierre documental no demuestra falta de respuesta operativa.",
      "indexed_papers": [
        "PT-07"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-12",
      "risk": "R-12",
      "coverage": "Datos · flujo externo",
      "control": "Autorización y clasificación de transferencias",
      "procedure": "Vincular flujo saliente con sesión, proceso, destino, clasificación, volumen, ticket y regla de salida; comparar autorización con contrato y justificar discrepancias.",
      "sample": "Todas las transferencias grandes del período según umbral aprobado; incluir 1.6 GB del caso.",
      "expected": "E-04: proxy/cloud, metadatos, DLP/clasificación, sesiones y autorizaciones.",
      "criterion": "Política simulada de salida de datos y clasificación por aprobar; NIST CSF 2.0, PROTECT/DETECT.",
      "sql": [
        "SQL-09"
      ],
      "papers": [
        "PT-04"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Bytes sin contenido ni contexto no prueban fuga; no inspeccionar datos reales no autorizados.",
      "indexed_papers": [
        "PT-04"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-13",
      "risk": "R-13",
      "coverage": "Aplicaciones · integridad/segregación",
      "control": "Integridad y conciliación CRM–ERP",
      "procedure": "Conciliar órdenes modificadas con historial, usuario/rol, autorización, identificador único y factura ERP; separar cambios legítimos, duplicados y diferencias no resueltas.",
      "sample": "Censo de 216 cambios declarados y códigos duplicados; si faltan fuentes, muestra sintética etiquetada.",
      "expected": "E-05: historial CRM, órdenes, facturas ERP, matriz de permisos y conciliación firmada.",
      "criterion": "Regla comercial y conciliación simuladas por aprobar; NIST CSF 2.0, PROTECT/DETECT.",
      "sql": [
        "SQL-05",
        "SQL-10"
      ],
      "papers": [
        "PT-05"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "216 modificaciones y duplicados de laboratorio no prueban fraude ni pérdida; autor desconocido.",
      "indexed_papers": [
        "PT-05"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-14",
      "risk": "R-14",
      "coverage": "IA · privacidad/calidad",
      "control": "Evaluación de chatbot, exactitud y revisión humana",
      "procedure": "En sandbox con datos ficticios, probar solicitudes normales, datos ajenos y entradas engañosas; medir exactitud frente a respuestas de referencia, filtrado, registro y derivación humana.",
      "sample": "Matriz de 20 casos ficticios: 10 exactitud, 5 privacidad, 5 entradas engañosas.",
      "expected": "E-10: inventario de prompts, respuestas, rúbrica, permisos, logs y revisión humana.",
      "criterion": "Rúbrica/política IA simulada por aprobar; NIST AI RMF 1.0, GOVERN/MAP/MEASURE/MANAGE.",
      "sql": [],
      "papers": [
        "PT-10"
      ],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "Valor 0.08 carece de escala; no derivar desempeño ni exposición de ese dato.",
      "indexed_papers": [
        "PT-10"
      ],
      "paper_conflict": false
    },
    {
      "id": "T-15",
      "risk": "R-15",
      "coverage": "Gobierno · riesgos",
      "control": "Indicadores y supervisión del comité",
      "procedure": "Comparar tablero y actas con riesgos de ciberseguridad/terceros, responsables, umbrales, decisiones y seguimiento; verificar consistencia con matriz y planes.",
      "sample": "Últimas 3 actas simuladas y tablero del período; censo de indicadores críticos.",
      "expected": "Sin E específica: tablero/actas simulados, registro de decisiones y seguimiento por crear y etiquetar.",
      "criterion": "Mandato del comité y umbrales simulados por aprobar; NIST CSF 2.0, GOVERN.",
      "sql": [],
      "papers": [],
      "status": "DISEÑADA · NO EJECUTADA",
      "limit": "El expediente E-01–E-10 no incluye soporte directo; no inventar actas como evidencia obtenida.",
      "indexed_papers": [],
      "paper_conflict": false
    }
  ],
  "papers": [
    {
      "id": "PT-01",
      "evidence": "E-01",
      "tests": [
        "T-01",
        "T-02"
      ],
      "risks": [
        "R-01",
        "R-02"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-02",
      "evidence": "E-02",
      "tests": [
        "T-03"
      ],
      "risks": [
        "R-03"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-03",
      "evidence": "E-03",
      "tests": [
        "T-07"
      ],
      "risks": [
        "R-07"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-04",
      "evidence": "E-04",
      "tests": [
        "T-07",
        "T-12"
      ],
      "risks": [
        "R-07",
        "R-12"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-05",
      "evidence": "E-05",
      "tests": [
        "T-13"
      ],
      "risks": [
        "R-13"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-06",
      "evidence": "E-06",
      "tests": [
        "T-05"
      ],
      "risks": [
        "R-05"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-07",
      "evidence": "E-07",
      "tests": [
        "T-09",
        "T-11"
      ],
      "risks": [
        "R-09",
        "R-11"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-08",
      "evidence": "E-08",
      "tests": [
        "T-08",
        "T-10"
      ],
      "risks": [
        "R-08",
        "R-10"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-09",
      "evidence": "E-09",
      "tests": [
        "T-06"
      ],
      "risks": [
        "R-06"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "id": "PT-10",
      "evidence": "E-10",
      "tests": [
        "T-14"
      ],
      "risks": [
        "R-14"
      ],
      "status": "No concluyente; pruebas diseñadas, no ejecutadas",
      "source": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    }
  ],
  "findings": [
    {
      "id": "H-01",
      "title": "Acceso remoto sin autenticación multifactor",
      "paragraph": 39,
      "source": "Hallazgos_Operacion_Trazabilidad.docx",
      "sql": [
        "SQL-03"
      ],
      "score": 20,
      "status_source": "Observación sustentada; incumplimiento formal pendiente de criterio interno",
      "priority": "Crítica",
      "status": "Observación preliminar del resumen académico",
      "condition": "El 14/10/2026 a las 02:17, la cronología registra una sesión remota de la cuenta ext_ops_04 sin MFA. A las 02:26 el servicio de identidad registra una elevación de privilegios, sin evidencia disponible que demuestre que corresponde a la misma sesión o al mismo actor.",
      "criterion": "NIST SP 800-53 Rev. 5, IA-02(01), para MFA en cuentas privilegiadas, e IA-02(02) para cuentas organizacionales no privilegiadas. La clasificación y alcance de la cuenta deben contrastarse con la política interna de acceso remoto y con las excepciones aprobadas.",
      "cause": "Hipótesis: exclusión de MFA o configuración incompleta en el acceso de terceros. No se ha determinado si existía una excepción formal ni quién administró la configuración.",
      "effect": "Mayor exposición al uso indebido de credenciales y a accesos no autorizados. La sesión observada no prueba intrusión, autoría del incidente ni conexión causal con la elevación posterior.",
      "evidence_text": "E-02: «Sesión externa sin MFA» (Proyecto, p. 5). Cronología: 02:17 (Proyecto, p. 4). SQL-03 del manual técnico ilustra una sesión sin MFA en base sintética; no sustituye el log original.",
      "additional": "Solicitar registros originales de VPN/IdP, ID de sesión, cuenta, método de autenticación, perfiles y estado de MFA; recertificación de cuenta, política de terceros y excepciones vigentes. Correlacionar con la elevación de privilegios respetando la hora y NTP.",
      "recommendation": "Exigir MFA resistente a phishing en accesos de riesgo y cuentas privilegiadas; deshabilitar o restringir el acceso hasta verificar identidad y privilegios, por parte del equipo de respuesta; revisar excepciones y cuentas externas mensualmente. Auditoría verificará muestras y evidencia de habilitación sin ejecutar la contención.",
      "justification": "Una sesión observada sin MFA en un contexto de incidente y posible acceso sensible incrementa la exposición; impacto potencial alto sobre CRM, SQL Server e identidad.",
      "risk": "R-03",
      "test": "T-03",
      "paper": "PT-02",
      "evidence": "E-02",
      "risk_score": 20,
      "mapping_status": "Referencias documentadas en el Paso 10; validación cruzada pendiente, T-XX no ejecutadas"
    },
    {
      "id": "H-02",
      "title": "Despliegue de integración sin aprobación final documentada",
      "paragraph": 49,
      "source": "Hallazgos_Operacion_Trazabilidad.docx",
      "sql": [
        "SQL-06"
      ],
      "score": 20,
      "status_source": "Observación sustentada; no se demuestra cambio no autorizado",
      "priority": "Crítica",
      "status": "Observación preliminar del resumen académico",
      "condition": "El 14/10/2026 a las 03:02 se ejecutó un despliegue del servicio de integración. El ticket de cambios no contiene aprobación final documentada; Desarrollo declara que la aprobación fue verbal. El despliegue ocurrió después de la lectura masiva y de las modificaciones de órdenes reportadas.",
      "criterion": "NIST SP 800-53 Rev. 5, CM-03: evaluar cambios controlados, aprobar/rechazar y documentar decisiones y ejecución. Debe compararse además con el procedimiento de cambios, pruebas y aprobaciones propio de RedNova.",
      "cause": "Hipótesis: aprobación informal y falta de bloqueo del pipeline cuando faltan evidencias. No está comprobado que la aprobación verbal fuese inválida según el procedimiento vigente.",
      "effect": "Dificultad para identificar responsables, comprobar pruebas previas, reconstruir decisiones o revertir cambios. No se puede afirmar que este despliegue ocasionara el incidente: las anomalías de 02:17–02:42 son anteriores.",
      "evidence_text": "E-06: «Aprobación final no documentada» (Proyecto, p. 5); contradicción de Desarrollo y hora de despliegue (Proyecto, p. 4). SQL-06 es una simulación de ticket sin aprobación.",
      "additional": "Obtener ticket íntegro, registro de aprobación, resultados de QA, commits, autor del merge, hash del artefacto, registros CI/CD, plan de reversión y política de cambios emergentes.",
      "recommendation": "Implementar flujo de aprobación auditable antes de desplegar: responsable técnico, seguridad y negocio según criticidad; registrar pruebas, evidencia de aceptación y rollback. Definir procedimiento controlado de emergencia con revisión posterior.",
      "justification": "La falta de trazabilidad de una versión puesta en producción limita análisis y recuperación, pero no determina el vector de ataque.",
      "risk": "R-05",
      "test": "T-05",
      "paper": "PT-06",
      "evidence": "E-06",
      "risk_score": 20,
      "mapping_status": "Referencias documentadas en el Paso 10; validación cruzada pendiente, T-XX no ejecutadas"
    },
    {
      "id": "H-03",
      "title": "Alerta crítica de seguridad sin cierre o seguimiento documentado",
      "paragraph": 60,
      "source": "Hallazgos_Operacion_Trazabilidad.docx",
      "sql": [
        "SQL-07"
      ],
      "score": 16,
      "status_source": "Observación sustentada; no se demuestra que la alerta fuese ignorada",
      "priority": "Crítica",
      "status": "Observación preliminar del resumen académico",
      "condition": "El 14/10/2026 a las 03:18 se emitió una alerta crítica de actividad sospechosa. El expediente E-07 no incluye cierre documentado; a las 03:42 se reporta indisponibilidad del CRM. El intervalo entre ambos eventos es de 24 minutos, sin prueba de que no hubiese acciones de respuesta.",
      "criterion": "NIST SP 800-53 Rev. 5, IR-05: realizar seguimiento y documentación de incidentes; IR-04 sobre manejo de incidentes. Complementar con los SLA internos de triage, escalamiento y cierre de alertas.",
      "cause": "Hipótesis: deficiencia en registro de tickets, integración SIEM–mesa de respuesta o formalización del cierre. Puede existir respuesta fuera del expediente inicialmente entregado.",
      "effect": "Menor capacidad de demostrar atención y escalamientos oportunos, de evaluar tiempos de respuesta y de preservar la secuencia de decisiones. No se infiere omisión operativa ni que la ausencia de cierre causara la interrupción.",
      "evidence_text": "E-07: «Alerta crítica sin cierre documentado» (Proyecto, p. 5), evento SIEM 03:18 y caída CRM 03:42 (Proyecto, p. 4). SQL-07 reproduce una alerta sin cierre en laboratorio, no acredita respuesta real.",
      "additional": "Solicitar ticket SOC/SIEM original, asignación, acuse, evidencias de contención, notificaciones, runbook, turno de guardia, tiempos normalizados y evidencia de escalamiento.",
      "recommendation": "Configurar ticket obligatorio para alertas críticas con responsable y estado, temporizador de escalamiento, bitácora inmutable y criterios de cierre. Revisar al menos una muestra de alertas semanalmente y medir atención documentada.",
      "justification": "La pérdida de trazabilidad en una alerta crítica durante un incidente puede retrasar decisiones y afecta la rendición de cuentas.",
      "risk": "R-11",
      "test": "T-11",
      "paper": "PT-07",
      "evidence": "E-07",
      "risk_score": 16,
      "mapping_status": "Referencias documentadas en el Paso 10; validación cruzada pendiente, T-XX no ejecutadas"
    },
    {
      "id": "H-04",
      "title": "Capacidad de restauración no demostrada con pruebas recientes",
      "paragraph": 70,
      "source": "Hallazgos_Operacion_Trazabilidad.docx",
      "sql": [
        "SQL-08"
      ],
      "score": 20,
      "status_source": "No concluyente sobre incumplimiento: falta política y evidencia completa",
      "priority": "Crítica",
      "status": "No concluyente",
      "condition": "El expediente informa respaldos automáticos programados, pero no una restauración verificada recientemente. La persona responsable de continuidad indica que la última restauración documentada fue varios meses antes del incidente. El CRM dejó de estar disponible a las 03:42, volvió en solo lectura a las 08:57 y recuperó escritura a las 09:37.",
      "criterion": "NIST SP 800-53 Rev. 5, CP-04 (pruebas del plan de contingencia), CP-09 (respaldos) y CP-10 (recuperación/reconstitución). Se necesita obtener la frecuencia formal exigida, BIA y RTO/RPO aprobados para declarar conformidad o incumplimiento.",
      "cause": "Hipótesis: planificación insuficiente de ejercicios de restauración o documentación incompleta. No se descarta que existan pruebas no aportadas por la fuente inicial.",
      "effect": "Riesgo de detectar tarde respaldos corruptos, dependencias faltantes o tiempos de recuperación superiores a lo tolerable. La ventana observada de indisponibilidad hasta escritura es de 5 h 55 min; no se puede afirmar incumplimiento de RTO ni calcular pérdida real (RPO) sin objetivos y datos adicionales.",
      "evidence_text": "E-08: «Respaldos programados, restauración no probada recientemente» (Proyecto, p. 5); declaración de Continuidad y cronología de recuperación (p. 4). SQL-08 ofrece solo dos respaldos sintéticos sin verificación reciente.",
      "additional": "Reunir BIA, política de periodicidad, actas de simulacros, bitácoras de restauración, comprobación de integridad, fecha de backup limpio, RTO/RPO objetivos y conciliación del punto de recuperación.",
      "recommendation": "Programar restauraciones controladas en ambiente aislado, validar consistencia CRM/SQL Server y tiempos reales de recuperación, documentar RTO/RPO observados y criterios de regreso a producción, y repetir según criticidad aprobada en el BIA.",
      "justification": "Una restauración no demostrada incrementa el impacto potencial ante indisponibilidad del CRM. El nivel crítico es preliminar, no equivale a incumplimiento comprobado.",
      "risk": "R-08",
      "test": "T-08",
      "paper": "PT-08",
      "evidence": "E-08",
      "risk_score": 20,
      "mapping_status": "Referencias documentadas en el Paso 10; validación cruzada pendiente, T-XX no ejecutadas"
    },
    {
      "id": "H-05",
      "title": "Integridad de órdenes comerciales sin conciliación concluida",
      "paragraph": 81,
      "source": "Hallazgos_Operacion_Trazabilidad.docx",
      "sql": [
        "SQL-05",
        "SQL-10"
      ],
      "score": 20,
      "status_source": "No concluyente: no se ha probado modificación indebida",
      "priority": "Crítica",
      "status": "No concluyente",
      "condition": "El 14/10/2026 a las 02:42 el CRM registró modificaciones en 216 órdenes comerciales. A las 11:15 Finanzas solicitó conciliación de órdenes y facturación. Aunque el administrador de BD declaró que los datos estaban intactos, el expediente indica que la conciliación no había concluido.",
      "criterion": "NIST SP 800-53 Rev. 5, SI-07 (integridad de software e información) y AU-12 (generación de registros de auditoría), junto con la expectativa de conciliación del proceso CRM–SQL Server–ERP. Debe localizarse el procedimiento financiero formal para precisar tolerancias y plazos.",
      "cause": "Hipótesis: trazabilidad transaccional insuficiente y/o proceso de conciliación pendiente tras el incidente. No se ha acreditado falla de autorización ni manipulación maliciosa de órdenes.",
      "effect": "Posibles errores de facturación, divergencias entre CRM y ERP o dificultad de atribuir cambios, si la conciliación identifica inconsistencias. El número 216 describe modificaciones, no operaciones fraudulentas ni pérdida económica cuantificada.",
      "evidence_text": "E-05: «216 órdenes modificadas» (Proyecto, p. 5), hora 02:42 y solicitud de Finanzas a las 11:15 (p. 4). SQL-05 ilustra 216 modificaciones en el laboratorio; SQL-10 presenta identificadores duplicados solo sintéticos.",
      "additional": "Solicitar identificadores de las 216 órdenes, antes/después, actores, transacciones, bitácoras CRM/SQL Server, autorizaciones, registros ERP, resultados de conciliación, fechas ajustadas por NTP y excepciones justificadas.",
      "recommendation": "Conciliar las 216 órdenes con ERP y facturación, clasificar variaciones autorizadas/no justificadas, documentar responsables y corregir registros solo por el procedimiento aprobado. Automatizar reporte de diferencias y conservar la bitácora de cambios.",
      "justification": "Las órdenes impactan facturación y confianza comercial, pero faltan pruebas de cambio irregular; por ello no puede elevarse a fraude o incumplimiento confirmado.",
      "risk": "R-13",
      "test": "T-13",
      "paper": "PT-05",
      "evidence": "E-05",
      "risk_score": 20,
      "mapping_status": "Referencias documentadas en el Paso 10; validación cruzada pendiente, T-XX no ejecutadas"
    }
  ],
  "sql": [
    {
      "id": "SQL-01",
      "objective": "Cuentas con baja laboral que siguen activas",
      "evidence": "E-01",
      "rows": 1,
      "result": "Coincidencia en los datos sintéticos",
      "interpretation": "Coincidencia en los datos sintéticos",
      "limit": "Una fila simulada evidencia una cuenta activa tras baja; no acredita un caso real.",
      "query": "-- LIMITACION: Una fila simulada evidencia una cuenta activa tras baja; no acredita un caso real.\nSELECT u.Codigo AS Usuario, u.FechaBaja, u.Activo\nFROM dbo.Usuarios AS u\nWHERE u.FechaBaja IS NOT NULL AND u.Activo = 1\nORDER BY u.Codigo;",
      "tables": [
        "dbo.Usuarios"
      ],
      "risk": "R-01",
      "test": "T-01",
      "paper": "PT-01",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Usuario": "usr_baja_01",
          "FechaBaja": "2026-09-30",
          "Activo": 1
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-02",
      "objective": "Cuentas administrativas compartidas",
      "evidence": "E-01",
      "rows": 1,
      "result": "Coincidencia en los datos sintéticos",
      "interpretation": "Coincidencia en los datos sintéticos",
      "limit": "Cuenta compartida ficticia; requiere registros de atribución individual.",
      "query": "-- LIMITACION: Cuenta compartida ficticia; requiere registros de atribución individual.\nSELECT u.Codigo AS Usuario, p.Recurso, p.Nivel\nFROM dbo.Usuarios AS u\nJOIN dbo.Privilegios AS p ON p.UsuarioId = u.UsuarioId\nWHERE u.CuentaCompartida = 1 AND p.Vigente = 1\nORDER BY u.Codigo;",
      "tables": [
        "dbo.Usuarios",
        "dbo.Privilegios"
      ],
      "risk": "R-02",
      "test": "T-02",
      "paper": "PT-01",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Usuario": "admin_ops_comp",
          "Recurso": "CRM",
          "Nivel": "ADMINISTRADOR"
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-03",
      "objective": "Sesiones remotas exitosas sin MFA",
      "evidence": "E-02",
      "rows": 1,
      "result": "ext_ops_04 · 2026-10-14 02:17:00",
      "interpretation": "ext_ops_04 · 2026-10-14 02:17:00",
      "limit": "Muestra la sesión sin MFA; no demuestra por sí sola que esa cuenta causara el ataque.",
      "query": "-- LIMITACION: Muestra la sesión sin MFA; no demuestra por sí sola que esa cuenta causara el ataque.\nSELECT u.Codigo AS Usuario, s.FechaInicio, s.TipoAcceso, s.MfaUsado, s.IpOrigen\nFROM dbo.Sesiones AS s JOIN dbo.Usuarios AS u ON u.UsuarioId = s.UsuarioId\nWHERE s.TipoAcceso = N'VPN' AND s.Resultado = N'EXITOSO'\n  AND s.MfaUsado = 0\nORDER BY s.FechaInicio;",
      "tables": [
        "dbo.Sesiones",
        "dbo.Usuarios"
      ],
      "risk": "R-03",
      "test": "T-03",
      "paper": "PT-02",
      "finding": "H-01",
      "findings": [
        "H-01"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Usuario": "ext_ops_04",
          "FechaInicio": "2026-10-14 02:17:00",
          "TipoAcceso": "VPN",
          "MfaUsado": 0,
          "IpOrigen": "198.51.100.24"
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-04",
      "objective": "Lecturas masivas registradas",
      "evidence": "E-03",
      "rows": 1,
      "result": "31840 filas (resumen)",
      "interpretation": "31840 filas (resumen)",
      "limit": "31,840 filas es dato preliminar del caso representado en laboratorio; no hay atribución autenticada.",
      "query": "-- LIMITACION: 31,840 filas es dato preliminar del caso representado en laboratorio; no hay atribución autenticada.\nSELECT FechaHora, Objeto, FilasLeidas, Origen, UsuarioId, SesionId\nFROM dbo.BitacoraConsultas WHERE FilasLeidas >= 10000\nORDER BY FechaHora;",
      "tables": [
        "dbo.BitacoraConsultas"
      ],
      "risk": "R-07",
      "test": "T-07",
      "paper": "PT-03",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "FechaHora": "2026-10-14 02:31:00",
          "Objeto": "dbo.Clientes",
          "FilasLeidas": 31840,
          "Origen": "RESUMEN_CASO_NO_AUTENTICADO",
          "UsuarioId": null,
          "SesionId": null
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-05",
      "objective": "Concentración de cambios de órdenes",
      "evidence": "E-05",
      "rows": 1,
      "result": "216 cambios / minuto",
      "interpretation": "216 cambios / minuto",
      "limit": "216 cambios se representan como simulación. No consta usuario responsable ni autorización.",
      "query": "-- LIMITACION: 216 cambios se representan como simulación. No consta usuario responsable ni autorización.\nSELECT CONVERT(VARCHAR(16), h.FechaHora, 120) AS Minuto,\n       COUNT(*) AS TotalCambios, COUNT(DISTINCT h.OrdenId) AS OrdenesDistintas\nFROM dbo.HistorialOrdenes AS h\nGROUP BY CONVERT(VARCHAR(16), h.FechaHora, 120)\nHAVING COUNT(*) >= 50 ORDER BY Minuto;",
      "tables": [
        "dbo.HistorialOrdenes"
      ],
      "risk": "R-13",
      "test": "T-13",
      "paper": "PT-05",
      "finding": "H-05",
      "findings": [
        "H-05"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Minuto": "2026-10-14 02:42",
          "TotalCambios": 216,
          "OrdenesDistintas": 216
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-06",
      "objective": "Despliegues sin evidencia de aprobación formal",
      "evidence": "E-06",
      "rows": 1,
      "result": "Coincidencia en los datos sintéticos",
      "interpretation": "Coincidencia en los datos sintéticos",
      "limit": "NULL significa aprobación no documentada, NO prueba que nunca existiera una autorización.",
      "query": "-- LIMITACION: NULL significa aprobación no documentada, NO prueba que nunca existiera una autorización.\nSELECT CambioId, FechaHora, Sistema, Version, Ticket, AprobacionFormal\nFROM dbo.CambiosSistema WHERE AprobacionFormal IS NULL OR AprobacionFormal = 0\nORDER BY FechaHora;",
      "tables": [
        "dbo.CambiosSistema"
      ],
      "risk": "R-05",
      "test": "T-05",
      "paper": "PT-06",
      "finding": "H-02",
      "findings": [
        "H-02"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "CambioId": 1,
          "FechaHora": "2026-10-14 03:02:00",
          "Sistema": "Servicio de integracion",
          "Version": "v2.6.1",
          "Ticket": "CAMBIO-2410",
          "AprobacionFormal": null
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-07",
      "objective": "Alertas críticas pendientes de cierre",
      "evidence": "E-07",
      "rows": 1,
      "result": "Coincidencia en los datos sintéticos",
      "interpretation": "Coincidencia en los datos sintéticos",
      "limit": "Que falte cierre documental no demuestra que nadie haya respondido.",
      "query": "-- LIMITACION: Que falte cierre documental no demuestra que nadie haya respondido.\nSELECT AlertaId, FechaHora, Severidad, Estado, FechaCierre\nFROM dbo.Alertas WHERE Severidad = N'CRITICA' AND FechaCierre IS NULL\nORDER BY FechaHora;",
      "tables": [
        "dbo.Alertas"
      ],
      "risk": "R-11",
      "test": "T-11",
      "paper": "PT-07",
      "finding": "H-03",
      "findings": [
        "H-03"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "AlertaId": 1,
          "FechaHora": "2026-10-14 03:18:00",
          "Severidad": "CRITICA",
          "Estado": "ABIERTA",
          "FechaCierre": null
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-08",
      "objective": "Respaldos sin restauración reciente o verificación",
      "evidence": "E-08",
      "rows": 2,
      "result": "Coincidencia en los datos sintéticos",
      "interpretation": "Coincidencia en los datos sintéticos",
      "limit": "Umbral de 90 días: criterio de laboratorio a validar contra política y BIA del cliente.",
      "query": "-- LIMITACION: Umbral de 90 días: criterio de laboratorio a validar contra política y BIA del cliente.\nSELECT Sistema, MAX(FechaBackup) AS UltimoBackup,\n       MIN(CAST(IntegridadVerificada AS INT)) AS IntegridadMinima,\n       MIN(CAST(RestauracionProbada AS INT)) AS RestauracionMinima,\n       MAX(FechaUltimaRestauracion) AS UltimaRestauracion\nFROM dbo.Backups\nGROUP BY Sistema\nHAVING MIN(CAST(IntegridadVerificada AS INT)) = 0\n    OR MIN(CAST(RestauracionProbada AS INT)) = 0\n    OR MAX(FechaUltimaRestauracion) IS NULL\n    OR DATEDIFF(DAY, MAX(FechaUltimaRestauracion), '2026-10-14T00:00:00') > 90\nORDER BY Sistema;",
      "tables": [
        "dbo.Backups"
      ],
      "risk": "R-08",
      "test": "T-08",
      "paper": "PT-08",
      "finding": "H-04",
      "findings": [
        "H-04"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Sistema": "CRM",
          "UltimoBackup": "2026-10-14 01:00:00",
          "IntegridadMinima": 0,
          "RestauracionMinima": 0,
          "UltimaRestauracion": "2026-06-01 10:00:00"
        },
        {
          "Sistema": "SQL_SERVER",
          "UltimoBackup": "2026-10-13 01:00:00",
          "IntegridadMinima": 0,
          "RestauracionMinima": 0,
          "UltimaRestauracion": "2026-06-01 10:00:00"
        }
      ],
      "verification": {
        "expected": 2,
        "actual": 2,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-09",
      "objective": "Transferencias sin clasificación de contenido",
      "evidence": "E-04",
      "rows": 1,
      "result": "1,600,000,000 bytes sin clasificación",
      "interpretation": "1,600,000,000 bytes sin clasificación",
      "limit": "El volumen no demuestra fuga. Se requieren destino, contenido, proceso originador y contexto de red.",
      "query": "-- LIMITACION: El volumen no demuestra fuga. Se requieren destino, contenido, proceso originador y contexto de red.\nSELECT TransferenciaId, FechaHora, BytesTransferidos, Destino,\n       ClasificacionContenido, EstadoAutorizacion, SesionId\nFROM dbo.Transferencias\nWHERE ClasificacionContenido IS NULL OR EstadoAutorizacion = N'NO_VERIFICADA'\nORDER BY FechaHora;",
      "tables": [
        "dbo.Transferencias"
      ],
      "risk": "R-07; R-12",
      "test": "T-07; T-12",
      "paper": "PT-04",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "TransferenciaId": 1,
          "FechaHora": "2026-10-14 02:35:00",
          "BytesTransferidos": 1600000000,
          "Destino": "DESTINO_NO_CLASIFICADO",
          "ClasificacionContenido": null,
          "EstadoAutorizacion": "NO_VERIFICADA",
          "SesionId": null
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-10",
      "objective": "Órdenes con identificador comercial duplicado",
      "evidence": "E-05",
      "rows": 1,
      "result": "2 órdenes comparten código",
      "interpretation": "2 órdenes comparten código",
      "limit": "Dos órdenes sintéticas comparten un código; no es un duplicado acreditado del caso.",
      "query": "-- LIMITACION: Dos órdenes sintéticas comparten un código; no es un duplicado acreditado del caso.\nSELECT Codigo, COUNT(*) AS Duplicados\nFROM dbo.Ordenes GROUP BY Codigo HAVING COUNT(*) > 1\nORDER BY Codigo;",
      "tables": [
        "dbo.Ordenes"
      ],
      "risk": "R-13",
      "test": "T-13",
      "paper": "PT-05",
      "finding": "H-05",
      "findings": [
        "H-05"
      ],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Codigo": "RN-20261014-0215",
          "Duplicados": 2
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-11",
      "objective": "Sesiones fuera del horario operativo de ejemplo",
      "evidence": "E-02",
      "rows": 1,
      "result": "Acceso a 2026-10-14 02:17:00",
      "interpretation": "Acceso a 2026-10-14 02:17:00",
      "limit": "El tramo 06:00 a 21:59 es ficticio; un acceso nocturno no demuestra irregularidad sin política de horarios.",
      "query": "-- LIMITACION: El tramo 06:00 a 21:59 es ficticio; un acceso nocturno no demuestra irregularidad sin política de horarios.\nSELECT u.Codigo AS Usuario, s.FechaInicio, s.TipoAcceso\nFROM dbo.Sesiones AS s JOIN dbo.Usuarios AS u ON u.UsuarioId = s.UsuarioId\nWHERE DATEPART(HOUR, s.FechaInicio) < 6 OR DATEPART(HOUR, s.FechaInicio) >= 22\nORDER BY s.FechaInicio;",
      "tables": [
        "dbo.Sesiones",
        "dbo.Usuarios"
      ],
      "risk": "R-03",
      "test": "T-03",
      "paper": "PT-02",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Usuario": "ext_ops_04",
          "FechaInicio": "2026-10-14 02:17:00",
          "TipoAcceso": "VPN"
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    },
    {
      "id": "SQL-12",
      "objective": "Intervalo anómalo entre respaldos del mismo sistema",
      "evidence": "E-08",
      "rows": 1,
      "result": "25 horas entre backups",
      "interpretation": "25 horas entre backups",
      "limit": "Intervalo >24h es un umbral de laboratorio; comprobar frecuencias aprobadas por sistema.",
      "query": "-- LIMITACION: Intervalo >24h es un umbral de laboratorio; comprobar frecuencias aprobadas por sistema.\nWITH Ordenados AS (\n  SELECT Sistema, FechaBackup,\n         LAG(FechaBackup) OVER (PARTITION BY Sistema ORDER BY FechaBackup) AS BackupAnterior\n  FROM dbo.Backups\n)\nSELECT Sistema, BackupAnterior, FechaBackup,\n       DATEDIFF(HOUR, BackupAnterior, FechaBackup) AS HorasEntreBackups\nFROM Ordenados\nWHERE BackupAnterior IS NOT NULL AND DATEDIFF(HOUR, BackupAnterior, FechaBackup) > 24\nORDER BY Sistema;",
      "tables": [
        "dbo.Backups",
        "Ordenados"
      ],
      "risk": "R-08",
      "test": "T-08",
      "paper": "PT-08",
      "finding": null,
      "findings": [],
      "source": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "trace_status": "Referencias documentadas; auditoría T-XX no ejecutada y revisión cruzada pendiente",
      "data": [
        {
          "Sistema": "SQL_SERVER",
          "BackupAnterior": "2026-10-12 00:00:00",
          "FechaBackup": "2026-10-13 01:00:00",
          "HorasEntreBackups": 25
        }
      ],
      "verification": {
        "expected": 1,
        "actual": 1,
        "correct": true,
        "date": "2026-11-05T05:36:06.3714840Z",
        "engine": "SQL Server 2022 · ejecución conservada en el expediente"
      }
    }
  ],
  "timeline": [
    {
      "date": "12/10/2026 16:15",
      "event": "Proveedor solicita renovación de privilegios API",
      "source": "Ticket / proveedor",
      "limit": "Pendiente de corroboración",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Pendiente de corroboración",
      "evidence": []
    },
    {
      "date": "14/10/2026 02:17",
      "event": "Login remoto ext_ops_04 sin MFA",
      "source": "IdP / VPN; E-02",
      "limit": "Preliminar",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Preliminar",
      "evidence": [
        "E-02"
      ]
    },
    {
      "date": "14/10/2026 02:26",
      "event": "Elevación de privilegios",
      "source": "IAM",
      "limit": "Atribución no probada",
      "kind": "Señal no concluyente",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Atribución no probada",
      "evidence": []
    },
    {
      "date": "14/10/2026 02:31",
      "event": "Lectura masiva: 31,840 filas",
      "source": "SQL Server; E-03",
      "limit": "Origen de resumen no autenticado",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Origen de resumen no autenticado",
      "evidence": [
        "E-03"
      ]
    },
    {
      "date": "14/10/2026 02:35",
      "event": "Tráfico saliente ~1.6 GB",
      "source": "Cloud/Proxy; E-04",
      "limit": "Contenido desconocido; fuga no confirmada",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Contenido desconocido; fuga no confirmada",
      "evidence": [
        "E-04"
      ]
    },
    {
      "date": "14/10/2026 02:42",
      "event": "Modificación de 216 órdenes",
      "source": "CRM; E-05",
      "limit": "Actor desconocido",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Actor desconocido",
      "evidence": [
        "E-05"
      ]
    },
    {
      "date": "14/10/2026 03:02",
      "event": "Despliegue de integración",
      "source": "CI/CD; E-06",
      "limit": "Aprobación no documentada",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Aprobación no documentada",
      "evidence": [
        "E-06"
      ]
    },
    {
      "date": "14/10/2026 03:18",
      "event": "Alerta crítica",
      "source": "SIEM; E-07",
      "limit": "Cierre no documentado",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Cierre no documentado",
      "evidence": [
        "E-07"
      ]
    },
    {
      "date": "14/10/2026 03:42",
      "event": "CRM indisponible / cifrado aparente",
      "source": "EDR / CRM",
      "limit": "Cifrado pendiente de confirmar",
      "kind": "Señal no concluyente",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Cifrado pendiente de confirmar",
      "evidence": []
    },
    {
      "date": "14/10/2026 04:05",
      "event": "Se solicita recuperación",
      "source": "Equipo de continuidad",
      "limit": "Cronología preliminar",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "Cronología preliminar",
      "evidence": []
    },
    {
      "date": "14/10/2026 08:57",
      "event": "CRM retorna solo lectura",
      "source": "CRM",
      "limit": "5 h 15 min tras caída",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "5 h 15 min tras caída",
      "evidence": []
    },
    {
      "date": "14/10/2026 09:37",
      "event": "CRM recupera escritura",
      "source": "CRM",
      "limit": "5 h 55 min tras caída",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "5 h 55 min tras caída",
      "evidence": []
    },
    {
      "date": "14/10/2026 11:15",
      "event": "Finanzas solicita conciliación",
      "source": "ERP / Finanzas",
      "limit": "No consta conciliación final",
      "kind": "Evento reportado",
      "certainty": "Resumen académico; original pendiente",
      "gaps": "No consta conciliación final",
      "evidence": []
    }
  ],
  "evidence": [
    {
      "id": "E-01",
      "name": "Usuarios y privilegios",
      "description": "Cuentas activas sin recertificación reciente.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-01, SQL-02 sobre datos sintéticos. PT-01 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-01",
      "risk": "R-01; R-02",
      "test": "T-01; T-02"
    },
    {
      "id": "E-02",
      "name": "Acceso VPN",
      "description": "Sesión externa sin MFA; cronología indica 14/10/2026 02:17 (UTC−6).",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-03, SQL-11 sobre datos sintéticos. PT-02 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-02",
      "risk": "R-03",
      "test": "T-03"
    },
    {
      "id": "E-03",
      "name": "Bitácora SQL Server",
      "description": "Lectura reportada de 31,840 registros; cronología indica 14/10/2026 02:31.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-04 sobre datos sintéticos. PT-03 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-03",
      "risk": "R-07",
      "test": "T-07"
    },
    {
      "id": "E-04",
      "name": "Tráfico cloud",
      "description": "Transferencia reportada de aproximadamente 1.6 GB; cronología indica 14/10/2026 02:35.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-09 sobre datos sintéticos. PT-04 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-04",
      "risk": "R-07; R-12",
      "test": "T-07; T-12"
    },
    {
      "id": "E-05",
      "name": "Cambios del CRM",
      "description": "216 órdenes modificadas; cronología indica 14/10/2026 02:42.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-05, SQL-10 sobre datos sintéticos. PT-05 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-05",
      "risk": "R-13",
      "test": "T-13"
    },
    {
      "id": "E-06",
      "name": "Ticket de cambios",
      "description": "Aprobación final no documentada; despliegue reportado a las 03:02 del 14/10/2026.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-06 sobre datos sintéticos. PT-06 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-06",
      "risk": "R-05",
      "test": "T-05"
    },
    {
      "id": "E-07",
      "name": "Alertas de seguridad",
      "description": "Alerta crítica reportada a las 03:18 del 14/10/2026, sin cierre documentado.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-07 sobre datos sintéticos. PT-07 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-07",
      "risk": "R-09; R-11",
      "test": "T-09; T-11"
    },
    {
      "id": "E-08",
      "name": "Respaldos",
      "description": "Respaldos programados; no se reportan pruebas recientes de restauración.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Consultas SQL-08, SQL-12 sobre datos sintéticos. PT-08 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-08",
      "risk": "R-08; R-10",
      "test": "T-08; T-10"
    },
    {
      "id": "E-09",
      "name": "Contrato del tercero",
      "description": "SLA reportado de 99.9 % y SOC 2 con cobertura parcial según el expediente.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Sin consulta vinculada en el conjunto SQL-01 a SQL-12. PT-09 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-09",
      "risk": "R-06",
      "test": "T-06"
    },
    {
      "id": "E-10",
      "name": "Chatbot con IA",
      "description": "Sesión anómala reportada con valor 0.08; escala y umbral no especificados.",
      "source": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "status": "Pendiente de validación; no consta recepción del original",
      "support": "Sin consulta vinculada en el conjunto SQL-01 a SQL-12. PT-10 documenta la revisión; solicitar y preservar la fuente original.",
      "paper": "PT-10",
      "risk": "R-14",
      "test": "T-14"
    }
  ],
  "plan": [
    {
      "id": "A-01",
      "finding": "H-01–H-05",
      "risk": "R-03; R-05; R-11; R-08; R-13",
      "test": "T-03; T-05; T-11; T-08; T-13",
      "evidence": "PT-02/05/06/07/08; E-02/05/06/07/08",
      "horizon": "0–24 h",
      "action": "Preservar logs VPN/IAM, SIEM, CRM, CI/CD y respaldos antes de cambios; generar copias de trabajo, huellas y custodia.",
      "owner": "Seguridad/IR + custodio operativo",
      "dependency": "Autorizar acceso y congelar retenciones antes de revocar o restaurar.",
      "budget": 15000,
      "kpi": "100 % de fuentes identificadas preservadas o excepción registrada.",
      "verification": "Inventario, archivos, hashes, actas y movimientos de custodia.",
      "verifier": "Auditoría / Diego",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-02",
      "finding": "H-01",
      "risk": "R-03",
      "test": "T-03",
      "evidence": "PT-02; E-02",
      "horizon": "0–24 h",
      "action": "Administración revoca sesiones sospechosas, revisa cuenta externa y aplica MFA/restricción temporal a accesos privilegiados.",
      "owner": "IAM + Seguridad",
      "dependency": "Después de A-01 para no perder evidencia volátil.",
      "budget": 10000,
      "kpi": "100 % de sesiones/cuentas privilegiadas de emergencia revisadas; 0 excepciones sin aprobación.",
      "verification": "Tickets, sesiones revocadas, configuración IdP/VPN y excepciones firmadas.",
      "verifier": "Auditoría / Marlon",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-03",
      "finding": "H-04 (no concluyente)",
      "risk": "R-08",
      "test": "T-08",
      "evidence": "PT-08; E-08",
      "horizon": "24–72 h",
      "action": "Comprobar respaldo limpio e integridad; ejecutar restauración de verificación en entorno aislado y documentar punto recuperable.",
      "owner": "Continuidad + Infraestructura/DBA",
      "dependency": "A-01; no sobrescribir producción ni originales.",
      "budget": 25000,
      "kpi": "1 restauración controlada documentada; 100 % de verificaciones de integridad del alcance aprobadas.",
      "verification": "Bitácora de restore, comparación de conteos/hash y acta de resultado.",
      "verifier": "Auditoría / Oscar",
      "release": "Firme: diagnóstico",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-04",
      "finding": "H-05 (no concluyente)",
      "risk": "R-13",
      "test": "T-13",
      "evidence": "PT-05; E-05",
      "horizon": "24–72 h",
      "action": "Conciliar las 216 modificaciones reportadas con historial, autorizaciones, ERP y facturación; clasificar diferencias.",
      "owner": "Finanzas + CRM/DBA",
      "dependency": "A-01; identificar población y preservar antes/después.",
      "budget": 15000,
      "kpi": "100 % de las 216 modificaciones revisadas o faltantes documentados; 0 diferencias sin clasificación.",
      "verification": "Conciliación firmada, listado de excepciones y trazas CRM/ERP.",
      "verifier": "Auditoría / Oscar",
      "release": "Firme: diagnóstico",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-05",
      "finding": "H-03",
      "risk": "R-11",
      "test": "T-11",
      "evidence": "PT-07; E-07",
      "horizon": "24–72 h",
      "action": "Reconstruir recepción, asignación, respuesta y cierre de alerta crítica; corregir vacíos del ticket sin inferir falta de actuación.",
      "owner": "SOC + Seguridad",
      "dependency": "A-01; correlación de horas/NTP y preservación del SIEM.",
      "budget": 15000,
      "kpi": "100 % de alertas críticas del incidente con responsable, estado y trazabilidad o excepción documentada.",
      "verification": "Evento SIEM, ticket, acuse, escalamiento y acta de revisión.",
      "verifier": "Auditoría / Diego",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-06",
      "finding": "H-01",
      "risk": "R-03",
      "test": "T-03",
      "evidence": "PT-02; E-02",
      "horizon": "7–30 días",
      "action": "Inventariar cuentas privilegiadas; desplegar MFA resistente a phishing y control de privilegios, con excepciones temporales aprobadas.",
      "owner": "IAM + Seguridad",
      "dependency": "A-02; confirmar población real antes de adquirir; priorizar terceros/admin.",
      "budget": 75000,
      "kpi": "100 % de cuentas privilegiadas inventariadas con MFA; 0 excepciones vencidas.",
      "verification": "Inventario, política, configuración, reportes de cobertura y pruebas negativas.",
      "verifier": "Auditoría / Marlon",
      "release": "Firme; cantidad de licencias estimada",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-07",
      "finding": "H-02",
      "risk": "R-05",
      "test": "T-05",
      "evidence": "PT-06; E-06",
      "horizon": "7–30 días",
      "action": "Bloquear despliegues sin ticket, aprobación previa, prueba y rollback; documentar vía de emergencia y revisión posterior.",
      "owner": "Desarrollo + dueño de cambios",
      "dependency": "Conservar ticket/versiones del incidente antes de modificar pipeline.",
      "budget": 35000,
      "kpi": "100 % de despliegues muestreados con aprobaciones y prueba previa; 100 % de emergencias revisadas.",
      "verification": "Reglas CI/CD, tickets, pruebas, trazas de release y rollback.",
      "verifier": "Auditoría / Marlon",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-08",
      "finding": "H-03",
      "risk": "R-11",
      "test": "T-11",
      "evidence": "PT-07; E-07",
      "horizon": "7–30 días",
      "action": "Integrar SIEM con tickets, responsables, escalamiento y retención protegida; definir plazos internos de atención.",
      "owner": "SOC + TI",
      "dependency": "A-05; aprobar criterios internos antes de medir cumplimiento.",
      "budget": 40000,
      "kpi": "100 % de alertas críticas crean ticket y 100 % tienen cierre/justificación.",
      "verification": "Configuración, casos de prueba, tickets, métricas y revisión semanal.",
      "verifier": "Auditoría / Diego",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-09",
      "finding": "H-04 (no concluyente)",
      "risk": "R-08",
      "test": "T-08",
      "evidence": "PT-08; E-08",
      "horizon": "7–30 días",
      "action": "Ampliar pruebas de restauración CRM/SQL en aislamiento, corregir fallos demostrados y conservar resultados.",
      "owner": "Continuidad + Infraestructura",
      "dependency": "Liberar Q40,000 solo si A-03/BIA demuestran necesidad y alcance aprobado.",
      "budget": 40000,
      "kpi": "100 % de sistemas críticos del alcance con restore test exitoso; tiempos medidos, no presumidos.",
      "verification": "Actas, logs, conciliación, tiempos y aprobación de retorno.",
      "verifier": "Auditoría / Oscar",
      "release": "Condicional",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-10",
      "finding": "H-05 (no concluyente)",
      "risk": "R-13",
      "test": "T-13",
      "evidence": "PT-05; E-05",
      "horizon": "30–90 días",
      "action": "Automatizar conciliación diaria CRM–ERP y trazabilidad antes/después solo si A-04 confirma brecha o volumen recurrente.",
      "owner": "Finanzas + Desarrollo",
      "dependency": "Liberar Q35,000 tras diagnóstico A-04 y regla comercial aprobada.",
      "budget": 35000,
      "kpi": "100 % de órdenes del alcance conciliadas por día; 0 diferencias abiertas sin dueño.",
      "verification": "Reporte diario, cola de excepciones, pruebas y aceptación de Finanzas.",
      "verifier": "Auditoría / Marlon",
      "release": "Condicional",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-11",
      "finding": "H-04 (no concluyente)",
      "risk": "R-08; R-10",
      "test": "T-08; T-10",
      "evidence": "PT-08; E-08",
      "horizon": "30–90 días",
      "action": "Actualizar BIA de ventas/facturación; aprobar RTO/RPO CRM/ERP y plan de continuidad, y contrastarlos con ensayos.",
      "owner": "Continuidad + dueños de negocio",
      "dependency": "Usar tiempos observados como datos, nunca como objetivos; aprobación formal del negocio.",
      "budget": 25000,
      "kpi": "100 % de procesos críticos con BIA/RTO/RPO aprobados; desviaciones con plan.",
      "verification": "BIA versionado, acta, planes y comparación de ejercicios.",
      "verifier": "Auditoría / Oscar",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    },
    {
      "id": "A-12",
      "finding": "H-01–H-05",
      "risk": "R-03; R-05; R-11; R-08; R-13",
      "test": "T-03; T-05; T-11; T-08; T-13",
      "evidence": "PT-02/05/06/07/08; E-02/05/06/07/08",
      "horizon": "30 y 90 días",
      "action": "Reauditar diseño y operación de controles, registrar excepciones y someter el riesgo residual a decisión del comité.",
      "owner": "Auditoría independiente + Comité",
      "dependency": "Solo reevaluar puntaje residual con pruebas T-XX y evidencia suficiente.",
      "budget": 20000,
      "kpi": "5/5 temas revisados a 30 y 90 días; 100 % de excepciones con decisión formal.",
      "verification": "PT actualizados, muestras, evidencia, dictamen y acta del comité.",
      "verifier": "Comité de Auditoría",
      "release": "Firme",
      "residual": "No reestimado; conservar puntaje actual hasta prueba y aprobación."
    }
  ],
  "files": [
    {
      "name": "01 Plan Auditoria",
      "filename": "01_Plan_Auditoria.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/01_Informe/01_Plan_Auditoria.docx",
      "size": 757051,
      "sha256": "e2eb5903dda9856f5e816cb76814cadc08f750b42e60ceed4e8a5af70be92fcc",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "01_Informe/01_Plan_Auditoria.docx"
    },
    {
      "name": "Control Calidad Compilacion Integrante3 ACTUALIZADO",
      "filename": "Control_Calidad_Compilacion_Integrante3_ACTUALIZADO.pdf",
      "category": "01_Informe",
      "type": "PDF",
      "url": "documentos/01_Informe/Control_Calidad_Compilacion_Integrante3_ACTUALIZADO.pdf",
      "size": 37062,
      "sha256": "370aee26dc68fd3dbe9dc5881e5746ec62fde22eeaeb7e2fab429fa5fe11f343",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "01_Informe/Control_Calidad_Compilacion_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "name": "Hallazgos Operacion Trazabilidad",
      "filename": "Hallazgos_Operacion_Trazabilidad.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/01_Informe/Hallazgos_Operacion_Trazabilidad.docx",
      "size": 36216,
      "sha256": "52cde26fca29783e801d56a2da4794d7632daf3e9767533dc91327eee95d8709",
      "version": "Vigente en el expediente",
      "role": "Cinco hallazgos documentados; revisión cruzada y evidencia original pendientes",
      "source_path": "01_Informe/Hallazgos_Operacion_Trazabilidad.docx"
    },
    {
      "name": "Informe Final Operacion Trazabilidad.docx (2)",
      "filename": "Informe_Final_Operacion_Trazabilidad.docx (2).pdf",
      "category": "01_Informe",
      "type": "PDF",
      "url": "documentos/01_Informe/Informe_Final_Operacion_Trazabilidad.docx (2).pdf",
      "size": 393197,
      "sha256": "5634c561bb80ffdd99ad32f9fb740234d3eb409125e4990726b3fcd2f2481394",
      "version": "Vigente en el expediente",
      "role": "Informe integrado disponible, 14 páginas; el nombre no acredita aprobación",
      "source_path": "01_Informe/Informe_Final_Operacion_Trazabilidad.docx (2).pdf"
    },
    {
      "name": "Mapa Causal",
      "filename": "Mapa_Causal.png",
      "category": "01_Informe",
      "type": "PNG",
      "url": "documentos/01_Informe/Mapa_Causal.png",
      "size": 178854,
      "sha256": "40543adb7cd058e68e51be4901de95dac32c0fe928932b25753ffed9eb4a343e",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "01_Informe/Mapa_Causal.png"
    },
    {
      "name": "Matrices Operacion Trazabilidad",
      "filename": "Matrices_Operacion_Trazabilidad.xlsx",
      "category": "01_Informe",
      "type": "XLSX",
      "url": "documentos/01_Informe/Matrices_Operacion_Trazabilidad.xlsx",
      "size": 17608,
      "sha256": "fd9ad02e40efbce8c117487b64342954bee147ac4d70257d3fb7c83a22afbf1b",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "01_Informe/Matrices_Operacion_Trazabilidad.xlsx"
    },
    {
      "name": "Matriz Riesgos",
      "filename": "Matriz_Riesgos.xlsx",
      "category": "02_Matrices",
      "type": "XLSX",
      "url": "documentos/02_Matrices/Matriz_Riesgos.xlsx",
      "size": 54474,
      "sha256": "ed7376d5efc3518e0bd1734b93eb9c8aa2e7f5a256a89b6215fa17b052f66c71",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "02_Matrices/Matriz_Riesgos.xlsx"
    },
    {
      "name": "Paso9 TPRM Privacidad IA ACTUALIZADO",
      "filename": "Paso9_TPRM_Privacidad_IA_ACTUALIZADO.pdf",
      "category": "02_Matrices",
      "type": "PDF",
      "url": "documentos/02_Matrices/Paso9_TPRM_Privacidad_IA_ACTUALIZADO.pdf",
      "size": 52200,
      "sha256": "c33d964ef0e8e05427d8852e837d24afb56562019ba4e90daa966297dec38e64",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "02_Matrices/Paso9_TPRM_Privacidad_IA_ACTUALIZADO.pdf"
    },
    {
      "name": "Arquitectura Logica Con Notas",
      "filename": "Arquitectura_Logica_Con_Notas.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Arquitectura_Logica_Con_Notas.pdf",
      "size": 807361,
      "sha256": "41b46e34b427f442573e9f063219af897f7e25b5a4ae25d883e1c78dc29598f3",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "03_Evidencias/Arquitectura_Logica_Con_Notas.pdf"
    },
    {
      "name": "Evaluacion y Notas Paso",
      "filename": "Evaluacion_y_Notas_Paso.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Evaluacion_y_Notas_Paso.pdf",
      "size": 162313,
      "sha256": "e8dbdf9620717c4077a515857e2a431ee3bd394bb53513250866ef0820493794",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "03_Evidencias/Evaluacion_y_Notas_Paso.pdf"
    },
    {
      "name": "Flujo Comercial Con Notas",
      "filename": "Flujo_Comercial_Con_Notas.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Flujo_Comercial_Con_Notas.pdf",
      "size": 804517,
      "sha256": "a794c1cdcf025a3ee5599a5f27e7dd13d0f20419fef79373fe53a41372ea6028",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "03_Evidencias/Flujo_Comercial_Con_Notas.pdf"
    },
    {
      "name": "Inventario Cadena Custodia E01 E10 Integrante3 ACTUALIZADO",
      "filename": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "size": 39679,
      "sha256": "c459518a1f0124d8aa26a3242d1d9ca7bf011a8fe295b14170cc473aefe6729e",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "03_Evidencias/Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "name": "Papeles Trabajo PT01 PT10 Integrante3 ACTUALIZADO",
      "filename": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf",
      "size": 60681,
      "sha256": "0c35000ec790485834244200f2e4516306ad7baaf8f252aea499e207e7a7b3fb",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "03_Evidencias/Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    {
      "name": "Analisis Auditoria",
      "filename": "Analisis_Auditoria.sql",
      "category": "04_SQL",
      "type": "SQL",
      "url": "documentos/04_SQL/Analisis_Auditoria.sql",
      "size": 51619,
      "sha256": "5e7ac7c651866c58777b2f025b174f43b577267c04db236c826a0d4b4ccc7c3f",
      "version": "Vigente en el expediente",
      "role": "Copia idéntica de RedNova.sql; mismo laboratorio sintético",
      "source_path": "04_SQL/Analisis_Auditoria.sql"
    },
    {
      "name": "Cronologia Forense",
      "filename": "Cronologia_Forense.csv",
      "category": "04_SQL",
      "type": "CSV",
      "url": "documentos/04_SQL/Cronologia_Forense.csv",
      "size": 1208,
      "sha256": "5b04e435089f23828f16220c4c9d3cd1fdc5625959a791076e3c11e9ac03d276",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/Cronologia_Forense.csv"
    },
    {
      "name": "Diccionario Datos",
      "filename": "Diccionario_Datos.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/Diccionario_Datos.pdf",
      "size": 73520,
      "sha256": "b0a7881205d1ebe2035d4debc29239f075af17e7f9dca6626802da17ab6a692b",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/Diccionario_Datos.pdf"
    },
    {
      "name": "Evidencias SQLServer",
      "filename": "Evidencias_SQLServer.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/Evidencias_SQLServer.pdf",
      "size": 102620,
      "sha256": "7b53078759be3c2d644c9663fed437bcbe73b876f6e9638ae76a4995727fe7de",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/Evidencias_SQLServer.pdf"
    },
    {
      "name": "INFORME VERIFICACION",
      "filename": "INFORME_VERIFICACION.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/INFORME_VERIFICACION.pdf",
      "size": 68982,
      "sha256": "3fd83a00dc00b4c90761acd51b57c0b9f8ad3b8d57ed91e85b1633c92595d36e",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/INFORME_VERIFICACION.pdf"
    },
    {
      "name": "Matriz Resultados y Trazabilidad VERIFICADA",
      "filename": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "category": "04_SQL",
      "type": "XLSM",
      "url": "documentos/04_SQL/Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm",
      "size": 56599,
      "sha256": "f3c3b652ec46d54125db69d44d9e1e9e026863ebc9bea8192140dc40ce7a9f03",
      "version": "Vigente en el expediente",
      "role": "Consultas y trazabilidad de laboratorio",
      "source_path": "04_SQL/Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm"
    },
    {
      "name": "Modelo Entidad Relacion",
      "filename": "Modelo_Entidad_Relacion.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/Modelo_Entidad_Relacion.pdf",
      "size": 53170,
      "sha256": "783a1997f04e29a1933890dbb75184a72caa69dee4cfe0ea6443fbaafc1c7af9",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/Modelo_Entidad_Relacion.pdf"
    },
    {
      "name": "RedNova",
      "filename": "RedNova.sql",
      "category": "04_SQL",
      "type": "SQL",
      "url": "documentos/04_SQL/RedNova.sql",
      "size": 51619,
      "sha256": "5e7ac7c651866c58777b2f025b174f43b577267c04db236c826a0d4b4ccc7c3f",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "04_SQL/RedNova.sql"
    },
    {
      "name": "Verificacion Integridad",
      "filename": "Verificacion_Integridad.json",
      "category": "04_SQL",
      "type": "JSON",
      "url": "documentos/04_SQL/Verificacion_Integridad.json",
      "size": 21128,
      "sha256": "58bde14adff881d2cd7df64dcb59b9e52ee084328f659344b485fe7559d702d5",
      "version": "Vigente en el expediente",
      "role": "Integridad documental; declara que no hubo nueva ejecución SQL Server",
      "source_path": "04_SQL/Verificacion_Integridad.json"
    },
    {
      "name": "Verificacion Referencias",
      "filename": "Verificacion_Referencias.json",
      "category": "04_SQL",
      "type": "JSON",
      "url": "documentos/04_SQL/Verificacion_Referencias.json",
      "size": 4133,
      "sha256": "bf9281fb347419cbb3b7aca9ef72caf2adfc1e4382a426ad74307dbbfff6d8db",
      "version": "Vigente en el expediente",
      "role": "Comprobación complementaria SQLite; no valida T-SQL",
      "source_path": "04_SQL/Verificacion_Referencias.json"
    },
    {
      "name": "Verificacion Resultados",
      "filename": "Verificacion_Resultados.json",
      "category": "04_SQL",
      "type": "JSON",
      "url": "documentos/04_SQL/Verificacion_Resultados.json",
      "size": 10976,
      "sha256": "8e5b61e4f2a2f1b9e0e2a707fd2f6d58111aed589a55e5ccf6c9bdf52edd6b17",
      "version": "Vigente en el expediente",
      "role": "Resultados conservados de SQL Server 2022 sobre datos sintéticos",
      "source_path": "04_SQL/Verificacion_Resultados.json"
    },
    {
      "name": "Plan Accion",
      "filename": "Plan_Accion.xlsx",
      "category": "05_PlanAccion",
      "type": "XLSX",
      "url": "documentos/05_PlanAccion/Plan_Accion.xlsx",
      "size": 20856,
      "sha256": "ae511fe7bd03bfc7f0f1aa6336301bae08b344996aaa2714cc6a009410afb914",
      "version": "Vigente en el expediente",
      "role": "12 acciones y Q350,000 propuestos; aprobación del comité pendiente",
      "source_path": "05_PlanAccion/Plan_Accion.xlsx"
    },
    {
      "name": "Matriz Referencias Normativas Paso9 ACTUALIZADA",
      "filename": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf",
      "category": "07_UsodeIA",
      "type": "PDF",
      "url": "documentos/07_UsodeIA/Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf",
      "size": 37309,
      "sha256": "c85b8569d3ca8a7e600b3beabe0680d91619728cb4da4947df60dba564f5c062",
      "version": "Vigente en el expediente",
      "role": "",
      "source_path": "07_UsodeIA/Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "name": "Registro Uso IA Operacion Trazabilidad ACTUALIZADO",
      "filename": "Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf",
      "category": "07_UsodeIA",
      "type": "PDF",
      "url": "documentos/07_UsodeIA/Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf",
      "size": 33349,
      "sha256": "98feee5e9e0761a653da5173bc38feb9a6924790f64db49baee1465cfffe5b15",
      "version": "Vigente en el expediente",
      "role": "Declaraciones del equipo; Oscar: Pasos 3, 7, 8 y 10",
      "source_path": "07_UsodeIA/Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf"
    },
    {
      "name": "01 Plan Auditoria",
      "filename": "01_Plan_Auditoria.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/historial/01_Informe/01_Plan_Auditoria.docx",
      "size": 757019,
      "sha256": "304ac6cfbac3ddfbf1fc7d4f800c1732fd5fe4b299930b0704c86c6385f8d54d",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/01_Plan_Auditoria.docx"
    },
    {
      "name": "ACTUALIZADO Control Calidad Compilacion Operacion Trazabilidad",
      "filename": "ACTUALIZADO_Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "category": "01_Informe",
      "type": "XLSX",
      "url": "documentos/historial/01_Informe/ACTUALIZADO_Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "size": 9339,
      "sha256": "42463e71bed468abc98636b35dcdd4abd4654d36fe94023b5b61a95bd8637416",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/ACTUALIZADO_Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx"
    },
    {
      "name": "Control Calidad Compilacion Operacion Trazabilidad",
      "filename": "Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "category": "01_Informe",
      "type": "XLSX",
      "url": "documentos/historial/01_Informe/Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "size": 8044,
      "sha256": "eb627cbd7ffc12349ecad8304b109cefad0c157839b4bf3a1031967662c30f25",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx"
    },
    {
      "name": "Hallazgos Operacion Trazabilidad",
      "filename": "Hallazgos_Operacion_Trazabilidad.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/historial/01_Informe/Hallazgos_Operacion_Trazabilidad.docx",
      "size": 36265,
      "sha256": "179f3b156f78040535d1699e14a5316d9a6871d076c26fb91405cf8ef37c915c",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/Hallazgos_Operacion_Trazabilidad.docx"
    },
    {
      "name": "Informe Operacion Trazabilidad",
      "filename": "Informe_Operacion_Trazabilidad.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/historial/01_Informe/Informe_Operacion_Trazabilidad.docx",
      "size": 353097,
      "sha256": "277bfecd34fb81ad6206bfb7b09f5e5eab0cbfecee2c8779105b9c79d96ffd5b",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/Informe_Operacion_Trazabilidad.docx"
    },
    {
      "name": "Mapa Causal Paso8",
      "filename": "Mapa_Causal_Paso8.png",
      "category": "01_Informe",
      "type": "PNG",
      "url": "documentos/historial/01_Informe/Mapa_Causal_Paso8.png",
      "size": 178854,
      "sha256": "40543adb7cd058e68e51be4901de95dac32c0fe928932b25753ffed9eb4a343e",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/Mapa_Causal_Paso8.png"
    },
    {
      "name": "Paso 10 Hallazgos Operacion Trazabilidad",
      "filename": "Paso_10_Hallazgos_Operacion_Trazabilidad.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/historial/01_Informe/Paso_10_Hallazgos_Operacion_Trazabilidad.docx",
      "size": 32385,
      "sha256": "f7efafe8db49745014895dc6b037d1272e13c84989047d3288f5c7daf2100c63",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/01_Informe/Paso_10_Hallazgos_Operacion_Trazabilidad.docx"
    },
    {
      "name": "ACTUALIZADO Paso9 TPRM Privacidad IA",
      "filename": "ACTUALIZADO_Paso9_TPRM_Privacidad_IA.xlsx",
      "category": "02_Matrices",
      "type": "XLSX",
      "url": "documentos/historial/02_Matrices/ACTUALIZADO_Paso9_TPRM_Privacidad_IA.xlsx",
      "size": 31075,
      "sha256": "3d5b572269dbc35aae837cca0b3e1acb8dfe9d8677994549be4746d6dfefcba5",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/02_Matrices/ACTUALIZADO_Paso9_TPRM_Privacidad_IA.xlsx"
    },
    {
      "name": "Plantillas Paso 9 TPRM Privacidad IA",
      "filename": "Plantillas_Paso_9_TPRM_Privacidad_IA.xlsx",
      "category": "02_Matrices",
      "type": "XLSX",
      "url": "documentos/historial/02_Matrices/Plantillas_Paso_9_TPRM_Privacidad_IA.xlsx",
      "size": 34215,
      "sha256": "c23a31c940bff60ee047bc3ccbd67ebf8d52ea66a38eeabd3dbf1f01e1d970e4",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/02_Matrices/Plantillas_Paso_9_TPRM_Privacidad_IA.xlsx"
    },
    {
      "name": "ACTUALIZADO Inventario Cadena Custodia E01 E10",
      "filename": "ACTUALIZADO_Inventario_Cadena_Custodia_E01_E10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/historial/03_Evidencias/ACTUALIZADO_Inventario_Cadena_Custodia_E01_E10.xlsx",
      "size": 14588,
      "sha256": "7b5bf8ebec84972dd7b6ad8f02985ca0f40cee7abe65db32d456489c457b63f5",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/03_Evidencias/ACTUALIZADO_Inventario_Cadena_Custodia_E01_E10.xlsx"
    },
    {
      "name": "ACTUALIZADO Papeles Trabajo PT01 PT10",
      "filename": "ACTUALIZADO_Papeles_Trabajo_PT01_PT10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/historial/03_Evidencias/ACTUALIZADO_Papeles_Trabajo_PT01_PT10.xlsx",
      "size": 43713,
      "sha256": "a143aa0ae8c35712a2d86435f807c1198c30ad3aa51e1439f5df9a9697aa1cb2",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/03_Evidencias/ACTUALIZADO_Papeles_Trabajo_PT01_PT10.xlsx"
    },
    {
      "name": "Inventario y Cadena Custodia E01 E10",
      "filename": "Inventario_y_Cadena_Custodia_E01_E10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/historial/03_Evidencias/Inventario_y_Cadena_Custodia_E01_E10.xlsx",
      "size": 13591,
      "sha256": "0a499adabe3c016566bf88272cc73f9f7da33650666c527ef769108db06185a0",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/03_Evidencias/Inventario_y_Cadena_Custodia_E01_E10.xlsx"
    },
    {
      "name": "Papeles Trabajo Editables PT01 PT10",
      "filename": "Papeles_Trabajo_Editables_PT01_PT10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/historial/03_Evidencias/Papeles_Trabajo_Editables_PT01_PT10.xlsx",
      "size": 41478,
      "sha256": "8efeec6f511806eaceb5b17ee94b40d753236e666a382af0d6863b133c381eb6",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/03_Evidencias/Papeles_Trabajo_Editables_PT01_PT10.xlsx"
    },
    {
      "name": "Matriz Resultados y Trazabilidad VERIFICADA",
      "filename": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsx",
      "category": "04_SQL",
      "type": "XLSX",
      "url": "documentos/historial/04_SQL/Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsx",
      "size": 18959,
      "sha256": "522bc77414e2c443f587f21306ea270308cc33f3b7bf5663a213e3ce37b04d61",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/04_SQL/Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsx"
    },
    {
      "name": "ACTUALIZADO Matriz Referencias Normativas Paso9",
      "filename": "ACTUALIZADO_Matriz_Referencias_Normativas_Paso9.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/historial/07_UsodeIA/ACTUALIZADO_Matriz_Referencias_Normativas_Paso9.xlsx",
      "size": 13174,
      "sha256": "3d3ee4e1432a2cb3a936f68ed87678077373c2eb447bdc856900a660441160c8",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/ACTUALIZADO_Matriz_Referencias_Normativas_Paso9.xlsx"
    },
    {
      "name": "ACTUALIZADO Registro Uso IA Operacion Trazabilidad",
      "filename": "ACTUALIZADO_Registro_Uso_IA_Operacion_Trazabilidad.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/historial/07_UsodeIA/ACTUALIZADO_Registro_Uso_IA_Operacion_Trazabilidad.xlsx",
      "size": 7715,
      "sha256": "d00cbbe34673f9a8bd2cacf78de89ecb6251ffc10111b59b7b7299ce6fdaf8fd",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/ACTUALIZADO_Registro_Uso_IA_Operacion_Trazabilidad.xlsx"
    },
    {
      "name": "Explicacion Uso IA Oscar",
      "filename": "Explicacion_Uso_IA_Oscar.docx",
      "category": "07_UsodeIA",
      "type": "DOCX",
      "url": "documentos/historial/07_UsodeIA/Explicacion_Uso_IA_Oscar.docx",
      "size": 6145,
      "sha256": "10edf91ada4320bc1c711c686ddbad73af257a13c640725946bfe0fe05f74185",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/Explicacion_Uso_IA_Oscar.docx"
    },
    {
      "name": "Matriz Referencias Normativas Paso9",
      "filename": "Matriz_Referencias_Normativas_Paso9.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/historial/07_UsodeIA/Matriz_Referencias_Normativas_Paso9.xlsx",
      "size": 11191,
      "sha256": "5a77ba31be1dbdaea3c87e4e2a26d31e5c6e3d7f5d46e5df5905e18b21cac0e9",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/Matriz_Referencias_Normativas_Paso9.xlsx"
    },
    {
      "name": "Registro Uso IA Oscar",
      "filename": "Registro_Uso_IA_Oscar.csv",
      "category": "07_UsodeIA",
      "type": "CSV",
      "url": "documentos/historial/07_UsodeIA/Registro_Uso_IA_Oscar.csv",
      "size": 5123,
      "sha256": "c88108ab6b140e5c522982a9378c98a45b5093e82175136e35de474eb4f132d2",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/Registro_Uso_IA_Oscar.csv"
    },
    {
      "name": "Registro Uso IA Proyecto Operacion Trazabilidad",
      "filename": "Registro_Uso_IA_Proyecto_Operacion_Trazabilidad.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/historial/07_UsodeIA/Registro_Uso_IA_Proyecto_Operacion_Trazabilidad.xlsx",
      "size": 7520,
      "sha256": "d53d2b54c6f7e60a7c5a4061e044f7b5a0fd047e1bfe573c90f57cbaacc75320",
      "version": "Anterior",
      "role": "Versión anterior conservada; no sustituye el expediente vigente",
      "source_path": "08_Revision/Revision_20261110/Historial/07_UsodeIA/Registro_Uso_IA_Proyecto_Operacion_Trazabilidad.xlsx"
    },
    {
      "name": "Matriz Trazabilidad Revision",
      "filename": "Matriz_Trazabilidad_Revision.csv",
      "category": "08_Revision",
      "type": "CSV",
      "url": "documentos/08_Revision/Matriz_Trazabilidad_Revision.csv",
      "size": 1430,
      "sha256": "7e25b6c7ad374430c114a8daa9932bf03a00ef11621f12a215e8b79603d9090e",
      "version": "Anterior",
      "role": "Revisión histórica del 07/11; consultar notas de actualización",
      "source_path": "08_Revision/Matriz_Trazabilidad_Revision.csv"
    },
    {
      "name": "Registro Asistencia IA",
      "filename": "Registro_Asistencia_IA.csv",
      "category": "08_Revision",
      "type": "CSV",
      "url": "documentos/08_Revision/Registro_Asistencia_IA.csv",
      "size": 854,
      "sha256": "363f36c5eee2185e9285f1fadecd688c853188b3877ff1d187e02f2130ad7244",
      "version": "Anterior",
      "role": "Revisión histórica del 07/11; consultar notas de actualización",
      "source_path": "08_Revision/Registro_Asistencia_IA.csv"
    },
    {
      "name": "Revision Coherencia",
      "filename": "Revision_Coherencia.md",
      "category": "08_Revision",
      "type": "MD",
      "url": "documentos/08_Revision/Revision_Coherencia.md",
      "size": 16859,
      "sha256": "ddf68f30154a4c6dc3fa43578e34bbed3539a4039381bfbababbec306ee91034",
      "version": "Anterior",
      "role": "Revisión histórica del 07/11; consultar notas de actualización",
      "source_path": "08_Revision/Revision_Coherencia.md"
    }
  ],
  "references": [
    {
      "title": "ITAF, 5.ª edición",
      "version": "ISACA; 5.ª edición (2026)",
      "scope": "Marco profesional; no es una ley guatemalteca ni una certificación de RedNova.",
      "urls": [
        "https://www.isaca.org/resources/it-audit"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "COBIT 2019",
      "version": "ISACA; COBIT 2019",
      "scope": "Marco de buenas prácticas; seleccionar objetivos pertinentes, no declarar cumplimiento integral sin evaluación.",
      "urls": [
        "https://www.isaca.org/en/resources/cobit"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "ISO/IEC 27001:2022",
      "version": "ISO/IEC 27001:2022; enmienda 1:2024",
      "scope": "No afirmar que RedNova está certificada ni que incumple la norma; la auditoría académica solo compara prácticas seleccionadas.",
      "urls": [
        "https://www.iso.org/standard/27001"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "NIST Cybersecurity Framework (CSF) 2.0",
      "version": "NIST CSF 2.0; febrero de 2024",
      "scope": "Marco voluntario y flexible; no prescribe por sí solo controles obligatorios ni constituye ley.",
      "urls": [
        "https://www.nist.gov/cyberframework"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "NIST SP 800-61 Rev. 3",
      "version": "NIST; revisión 3, abril de 2025",
      "scope": "Guía técnica; reemplaza SP 800-61 Rev. 2. No tratar la revisión 2 como versión vigente.",
      "urls": [
        "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "OWASP Top 10:2025",
      "version": "OWASP Top 10; edición 2025",
      "scope": "Documento de concienciación y referencia; no sustituye una prueba técnica ni representa por sí solo un estándar de certificación.",
      "urls": [
        "https://top10.owasp.org/2025/es/"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "NIST AI RMF 1.0 y NIST AI 600-1",
      "version": "NIST AI RMF 1.0 (2023); perfil de IA generativa AI 600-1 (2024)",
      "scope": "Marco voluntario. No asumir que el chatbot es generativo hasta confirmar su arquitectura y tipo de modelo.",
      "urls": [
        "https://www.nist.gov/itl/ai-risk-management-framework",
        "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "Constitución Política de Guatemala, artículo 24",
      "version": "Constitución Política de la República de Guatemala; artículo 24",
      "scope": "La aplicación concreta depende de los hechos y del procedimiento legal correspondiente; no afirmar automáticamente que ocurrió una violación.",
      "urls": [
        "https://www.congreso.gob.gt/assets/uploads/secciones/pdf/16e67-constitucion-politica-de-la-republica-de-guatemala.pdf"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "Ley de Acceso a la Información Pública, Decreto 57-2008",
      "version": "Congreso de Guatemala; Decreto 57-2008; artículos 6 y 30, entre otros",
      "scope": "No asumir que aplica automáticamente a toda empresa privada. El caso debe confirmar la naturaleza jurídica y relación con fondos o funciones públicas.",
      "urls": [
        "https://www.congreso.gob.gt/detalle_pdf/decretos/13082"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "Ley para el Reconocimiento de las Comunicaciones y Firmas Electrónicas, Decreto 47-2008",
      "version": "Congreso de Guatemala; Decreto 47-2008",
      "scope": "No es una ley integral de protección de datos ni una norma general de ciberseguridad. Revisar el acto y su ámbito antes de concluir aplicabilidad.",
      "urls": [
        "https://www.congreso.gob.gt/detalle_pdf/decretos/13076"
      ],
      "status": "Incluida en la matriz PDF vigente; verificar criterio y aplicabilidad",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "NIST SP 800-53 Rev. 5 · catálogo 5.2.0",
      "version": "Catálogo 5.2.0",
      "scope": "Citado en H-01 a H-05. Añadir a la matriz y documentar controles IA-2, CM-3, IR-4/5, CP-4/9/10, SI-7 y AU-12.",
      "urls": [
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "https://csrc.nist.gov/news/2025/nist-releases-revision-to-sp-800-53-controls"
      ],
      "status": "Referencia de los hallazgos o propuesta anterior; no incorporada en la matriz PDF vigente",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    {
      "title": "NIST SP 800-63B-4 · §3.2.5",
      "version": "Julio 2025",
      "scope": "Referencia adicional para la recomendación de MFA resistente a phishing. No es una obligación automática de la empresa del caso.",
      "urls": [
        "https://pages.nist.gov/800-63-4/sp800-63b.html#phishing"
      ],
      "status": "Referencia de los hallazgos o propuesta anterior; no incorporada en la matriz PDF vigente",
      "source": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    }
  ],
  "review": {
    "fecha": "2026-11-07",
    "dictamen": "Expediente académico con informe integrado y soportes nuevos; no acredita autenticidad de originales, ejecución de T-XX ni aprobación final.",
    "scope": "Revisión de coherencia documental y estática del SQL; no autenticación forense, auditoría productiva ni nueva ejecución SQL Server.",
    "issues": [
      {
        "id": "REV-01",
        "priority": "Alta",
        "title": "Fuentes académicas ausentes",
        "location": "Informe Paso 8, Referencias; Paso 10, Fuentes y criterios; matrices y PDF del Paso 3",
        "detail": "Se citan Proyecto Final, Guía de Entregables, Manual_Paso_a_Paso y Asignación de Roles, pero esos originales no aparecen en el paquete revisado. No se pueden contrastar sus páginas, requisitos de extensión o reglas de presupuesto.",
        "action": "Adjuntar los originales o enlaces institucionales/versiones identificables. En cada afirmación indicar documento, sección y página. No usar el resumen como si fuera el log fuente.",
        "current_note": "Siguen faltando los originales académicos citados (proyecto, guía y asignación); el expediente ofrece referencias a ellos."
      },
      {
        "id": "REV-02",
        "priority": "Media",
        "title": "Alcance general y ventana del incidente",
        "location": "01_Plan_Auditoria.docx: Período; Informe_Operacion_Trazabilidad.docx §1; Paso_10_Hallazgos, portada",
        "detail": "El plan usa 14/09–14/10/2026 y los módulos de Pasos 8/10 usan 12–14/10/2026. Pueden coexistir como alcance general y subventana, pero no se declara consistentemente.",
        "action": "Usar: “Período auditado: 14 sep.–14 oct. 2026. La reconstrucción focaliza los eventos del 12–14 de octubre; la revisión posterior no amplía el período”.",
        "current_note": "Continúa la limitación de evidencia/criterio: revisar el soporte vigente antes de cerrar."
      },
      {
        "id": "REV-03",
        "priority": "Alta",
        "title": "Versiones y estados de trazabilidad",
        "location": "04_SQL: XLSX frente a XLSM; XLSM Trazabilidad!E2:F13, LEEME!A6 y Revision y pendientes!C4",
        "detail": "La XLSM tiene las 24 celdas R/T llenas; la XLSX las conserva PENDIENTE. La propia XLSM todavía dice que quedan 12 T pendientes. Los resultados y las consultas no cambian.",
        "action": "Elegir una versión de referencia, conservar la otra como anterior y conciliar las notas. La presentación usa la XLSM para los vínculos disponibles, sin dar por aprobado el programa T.",
        "current_note": "XLSM vigente con R/T; siguen existiendo notas internas anteriores. No se interpreta completar un vínculo como ejecutar una prueba."
      },
      {
        "id": "REV-04",
        "priority": "Alta",
        "title": "Programa maestro y dos familias de PT/T",
        "location": "ACTUALIZADO_Control_Calidad!F7,F20; Matrices_Operacion_Trazabilidad.xlsx/Pruebas; Informe Paso 8 §9",
        "detail": "Se afirma que T-01 a T-15 están en Matriz_Riesgos.xlsx, pero ese archivo tiene seis hojas y no contiene ese programa. El Paso 8 usa PT-08-01/T-08-01 etc.; el DOCX resume seis PT-08 y el XLSX desarrolla diez con significados distintos desde PT-08-02.",
        "action": "Adjuntar el programa maestro T-01 a T-15 y aprobar un diccionario de códigos. Ejemplo: el DOCX PT-08-03 es Órdenes; el XLSX PT-08-03 es Egreso. La matriz de correspondencias de esta revisión es temática y no reemplaza la aprobación del equipo.",
        "current_note": "Programa T-01 a T-15 disponible. Contradicción: T-04 propone PT-01/PT-05, pero el índice PDF no incluye T-04 en esos papeles y dice que no tiene PT específico. T-15 carece de PT. Mantener separadas las familias del Paso 8."
      },
      {
        "id": "REV-05",
        "priority": "Alta",
        "title": "Puntajes de riesgos y hallazgos sin conciliación",
        "location": "Matriz_Riesgos.xlsx/filas R-05,R-11,R-13; Paso_10_Hallazgos/H-02,H-03,H-05",
        "detail": "R-05=20 y H-02=16; R-11=16 y H-03=15; R-13=20 y H-05=12. No son automáticamente errores si evalúan objetos o momentos distintos, pero el Paso 10 también los llama riesgo inherente preliminar y falta explicar la diferencia.",
        "action": "Aprobar una valoración común o justificar expresamente las diferencias de objeto, evidencia y fecha. Mantener separados el Top 5 de riesgos y los cinco hallazgos; no tratarlos como la misma lista.",
        "current_note": "Los cinco puntajes del DOCX vigente coinciden con sus riesgos. El informe integrado resume R-01 a R-14, mientras la matriz contiene 15 riesgos hasta R-15; no se elimina R-15 para resolverlo. Versión anterior en historial."
      },
      {
        "id": "REV-06",
        "priority": "Alta",
        "title": "Certeza de los hallazgos",
        "location": "Paso_10_Hallazgos/resumen H-01 a H-03; ACTUALIZADO_Papeles_Trabajo/PT-02,PT-06,PT-07!B22",
        "detail": "Tres hallazgos se llaman “Observación sustentada”, mientras los papeles siguen NO CONCLUYENTE y no hay registros originales. Las limitaciones del propio Paso 10 reducen el riesgo de sobreafirmación, pero el resumen se puede interpretar como prueba productiva.",
        "action": "Rotular: “Observación preliminar sustentada en el resumen académico; no incumplimiento productivo confirmado”. Conservar las causas como hipótesis y anexar criterio interno antes de cerrar incumplimiento.",
        "current_note": "Continúa la limitación de evidencia/criterio: revisar el soporte vigente antes de cerrar."
      },
      {
        "id": "REV-07",
        "priority": "Alta",
        "title": "Soportes reproducibles del laboratorio no incluidos",
        "location": "INFORME_VERIFICACION.pdf pp.1–2; Evidencias_SQLServer.pdf; matriz SQL/Validacion SQL e Indice evidencias",
        "detail": "Los PDF y matrices reportan ejecución en SQL Server, pero no están los CSV, JSON de verificación, consultas individuales ni scripts auxiliares a los que remiten. El SQL principal sí está y su SHA-256 coincide con el PDF.",
        "action": "Incluir los soportes citados, con su manifiesto de hashes y ruta final. No incluir .env ni credenciales. Esta revisión contrastó consultas y documentos; no volvió a ejecutar SQL Server.",
        "current_note": "Ya se incluyen JSON de resultados, integridad y comprobación SQLite, cronología CSV y SQL idénticos. El manifiesto y los CSV individuales citados aún no están en 04_SQL."
      },
      {
        "id": "REV-08",
        "priority": "Alta",
        "title": "Capturas SSMS pendientes",
        "location": "Matriz SQL/Indice evidencias y Lista de entrega; control de calidad actualizado!F12,F21",
        "detail": "No se encontraron SQL-01.png a SQL-12.png ni VOLUMEN.png. Evidencias_SQLServer.pdf se identifica correctamente como transcripción .NET, no captura de SSMS.",
        "action": "Generar las 13 capturas legibles en el laboratorio y actualizar el índice. Confirmar la exigencia exacta con la guía académica original, todavía ausente.",
        "current_note": "No aparecen SQL-01.png a SQL-12.png ni VOLUMEN.png; el PDF se identifica como transcripción, no capturas SSMS."
      },
      {
        "id": "REV-09",
        "priority": "Alta",
        "title": "Plan de acción no integrado",
        "location": "Carpeta 05_PlanAccion; Informe Paso 8 §10; control de calidad!D13 y F14",
        "detail": "05_PlanAccion está vacía. Hay recomendaciones y horizontes propuestos, pero no un plan final con responsables, costos, plazos, KPI y evidencia de cierre. Q350,000 es un techo citado por el control de calidad, no un gasto aprobado.",
        "action": "Crear el plan del Paso 11, vinculado a H/R, con responsables por función, fecha, costo, KPI, meta, prueba de cierre y aprobación. Referenciar el origen académico del límite presupuestario.",
        "current_note": "Plan_Accion.xlsx disponible: 12 acciones, Q350,000 propuestos y Q75,000 condicionados; comité y ejecución pendientes."
      },
      {
        "id": "REV-10",
        "priority": "Media",
        "title": "Criterios concretos ausentes de la matriz normativa",
        "location": "ACTUALIZADO_Matriz_Referencias_Normativas_Paso9/Matriz normativa; Paso_10_Hallazgos/criterios",
        "detail": "El Paso 10 usa NIST SP 800-53 Rev. 5, catálogo 5.2.0, pero esa referencia no figura entre las diez entradas de la matriz normativa. Los marcos generales no especifican por sí solos la política aplicable.",
        "action": "Añadir SP 800-53 y sus controles por hallazgo; para MFA resistente a phishing añadir, si se mantiene esa recomendación, SP 800-63B-4 §3.2.5. Separar recomendación técnica de obligación contractual o legal.",
        "current_note": "La matriz normativa PDF mantiene 10 referencias; SP 800-53 usado en hallazgos y SP 800-63B-4 propuesto deben diferenciarse de las entradas de esa matriz."
      },
      {
        "id": "REV-11",
        "priority": "Media",
        "title": "Índice de papeles desactualizado",
        "location": "ACTUALIZADO_Papeles_Trabajo_PT01_PT10.xlsx/Resumen!F5:G14 frente a cada PT!B10:B11",
        "detail": "El Resumen deja todos los R/T pendientes aunque cada hoja PT ya tiene vínculos temáticos. Esto puede hacer que el expositor dé dos respuestas distintas según la pestaña que abra.",
        "action": "Sincronizar el índice con las hojas de detalle y etiquetar los vínculos como propuestos hasta aprobar el programa maestro. No cambiar el estado de ejecución por completar un código.",
        "current_note": "El PDF vigente sincroniza el índice PT con sus R/T; identifica T-04 y T-15 sin PT específico. Originales y revisión cruzada pendientes."
      },
      {
        "id": "REV-12",
        "priority": "Media",
        "title": "Referencias temáticas imprecisas en privacidad e IA",
        "location": "ACTUALIZADO_Paso9/Evaluacion_Privacidad!I6,I9:I14; Riesgos_IA!D6",
        "detail": "La autorización móvil apunta solo a R-07/T-07; SIEM y chatbot también repiten R-07/T-07. En I11:I14 hay referencias sin proceso. IA-04 describe permisos en vez de la prueba de entradas engañosas.",
        "action": "Conservar R-07 para privacidad y añadir, según el objetivo, R-04 para autorización, R-09/R-11 para logs/alertas y R-14 para IA. Eliminar filas sin proceso o completarlas. Corregir D6 a “prueba de entradas maliciosas no ejecutada”.",
        "current_note": "El Paso 9 PDF corrige vínculos y separa criterios de privacidad, terceros e IA. Las evaluaciones permanecen documentales y sujetas a validación."
      },
      {
        "id": "REV-13",
        "priority": "Media",
        "title": "Registro de uso de IA vacío",
        "location": "07_UsodeIA/ACTUALIZADO_Registro_Uso_IA_Operacion_Trazabilidad.xlsx/Registro de uso de IA",
        "detail": "Las veinte filas solo tienen número. Hay declaraciones de asistencia de IA y esta conversación acredita usos concretos, pero no una revisión humana ya aprobada.",
        "action": "Registrar únicamente usos reales y dejar la validación humana como pendiente cuando corresponda. Se adjunta un CSV con tres usos observables en esta conversación; no se atribuyen usos a otros integrantes.",
        "current_note": "Registro de IA PDF vigente con declaraciones de los tres integrantes. Oscar: Pasos 3, 7, 8 y 10. Las declaraciones no equivalen a evidencia técnica."
      },
      {
        "id": "REV-14",
        "priority": "Alta",
        "title": "Falta consolidar el informe general",
        "location": "01_Informe/Informe_Operacion_Trazabilidad.docx, portada PASO 8; Paso_10_Hallazgos",
        "detail": "El documento llamado Informe_Operacion_Trazabilidad es el módulo de reconstrucción y continuidad (Paso 8), no un informe general que integre plan, riesgos, pruebas, hallazgos, acciones y conclusión. No se puede certificar la extensión del informe final a partir de estos módulos.",
        "action": "Compilar una versión final con índice, alcance general, metodología, resumen de resultados, hallazgos, plan de acción, limitaciones y anexos. Confirmar extensión y formato contra la guía original.",
        "current_note": "Ahora existe un informe integrado de 14 páginas. El control de calidad aún cita otro nombre y 13 páginas; documentar la diferencia antes de aprobar."
      },
      {
        "id": "REV-15",
        "priority": "Media",
        "title": "Leyenda y flechas del mapa causal",
        "location": "Mapa_Causal_Paso8.png; Informe Paso 8 §4 y leyenda",
        "detail": "El PNG aislado no incorpora la leyenda. El enlace 04:05→08:57 aparece discontinuo/ámbar aunque describe sucesión de recuperación; el texto reserva ese estilo para relaciones causales hipotéticas.",
        "action": "Incluir la leyenda en el gráfico y distinguir sucesión temporal de hipótesis causal. La página conserva la advertencia y no transforma una flecha en una causa demostrada.",
        "current_note": "Mapa_Causal.png conserva el mismo hash del mapa anterior. Su leyenda y límites se interpretan junto al informe y matrices, sin probar causalidad."
      }
    ],
    "checks": {
      "consultas": [
        {
          "id": "SQL-01",
          "coincide_script": true
        },
        {
          "id": "SQL-02",
          "coincide_script": true
        },
        {
          "id": "SQL-03",
          "coincide_script": true
        },
        {
          "id": "SQL-04",
          "coincide_script": true
        },
        {
          "id": "SQL-05",
          "coincide_script": true
        },
        {
          "id": "SQL-06",
          "coincide_script": true
        },
        {
          "id": "SQL-07",
          "coincide_script": true
        },
        {
          "id": "SQL-08",
          "coincide_script": true
        },
        {
          "id": "SQL-09",
          "coincide_script": true
        },
        {
          "id": "SQL-10",
          "coincide_script": true
        },
        {
          "id": "SQL-11",
          "coincide_script": true
        },
        {
          "id": "SQL-12",
          "coincide_script": true
        }
      ],
      "tablas": 12,
      "columnas": 83,
      "sha256_sql": "5E7AC7C651866C58777B2F025B174F43B577267C04DB236C826A0D4B4CCC7C3F",
      "riesgos": 15,
      "criticos": 8,
      "altos": 7,
      "minutos_consulta": 315,
      "minutos_escritura": 355,
      "anticipacion_alerta_minutos": 24,
      "sql_reejecutado": false
    },
    "updated": "10/11/2026"
  },
  "ai": {
    "date": "08/11/2026",
    "person": "Oscar",
    "role": "Integrante 2 / analista técnico",
    "status": "Declaración de Oscar incluida en el registro del equipo; cada integrante debe confirmar su uso real",
    "document": "documentos/07_UsodeIA/Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf",
    "register": "documentos/07_UsodeIA/Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf",
    "records": [
      {
        "id": "IA-O01",
        "date": "08/11/2026 (revisión actual)",
        "tool": "Codex (OpenAI)",
        "purpose": "Paso 3 · arquitectura lógica y flujo comercial",
        "request": "Centrar la explicación del uso de IA en las partes de Oscar; contrastar sus entregables técnicos.",
        "result": "Lectura del anexo del Paso 3 para delimitar componentes documentados, relaciones supuestas y controles esperados, y explicar esas distinciones en la declaración personal.",
        "validation": "El anexo identifica modelos académicos y relaciones por verificar. La revisión documental no valida topología productiva. No consta aquí qué IA se usó para crear los diagramas originales.",
        "source": "03_Evidencias/Arquitectura_Logica_Con_Notas.pdf; Flujo_Comercial_Con_Notas.pdf; Evaluacion_y_Notas_Paso.pdf, pp. 1–4.",
        "basis": "Revisión observada; elaboración original con IA pendiente de precisar"
      },
      {
        "id": "IA-O02",
        "date": "07–08/11/2026 (revisión)",
        "tool": "Codex (OpenAI)",
        "purpose": "Paso 7 · laboratorio SQL y documentación técnica",
        "request": "Revisar coherencia del proyecto y referencias de sus resultados técnicos.",
        "result": "Comparación estática de las doce consultas, matrices y soportes; revisión de las cifras de 31,840 lecturas, 216 cambios y 1,600,000,000 bytes, con sus límites de interpretación.",
        "validation": "El informe del laboratorio reporta ejecución previa en SQL Server 2022 sobre datos sintéticos. Esta asistencia cotejó archivos y no reejecutó SQL Server. La herramienta utilizada al redactar inicialmente SQL y diccionario no consta.",
        "source": "04_SQL/RedNova.sql; Diccionario_Datos.pdf; INFORME_VERIFICACION.pdf; Evidencias_SQLServer.pdf; Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsm.",
        "basis": "Revisión documentada; ejecución previa reportada por el expediente"
      },
      {
        "id": "IA-O03",
        "date": "07–08/11/2026 (revisión)",
        "tool": "Codex (OpenAI)",
        "purpose": "Paso 8 · reconstrucción del incidente y continuidad",
        "request": "Comprobar coherencia del relato, evidencia y conclusiones del proyecto.",
        "result": "Contraste de cronología, hipótesis y límites de continuidad; distinción entre 5 h 15 min hasta solo lectura y 5 h 55 min hasta escritura, sin tratarlos como objetivos RTO/RPO.",
        "validation": "Se revisaron documentos del módulo; no se autenticaron logs ni se confirmó causa raíz, autor, fuga o integridad final. El DOCX se presenta como trabajo del equipo: no se atribuye su autoría exclusiva a Oscar.",
        "source": "01_Informe/Informe_Operacion_Trazabilidad.docx; Matrices_Operacion_Trazabilidad.xlsx; Mapa_Causal_Paso8.png.",
        "basis": "Revisión observada dentro del alcance técnico de Oscar"
      },
      {
        "id": "IA-O04",
        "date": "06–08/11/2026 (según registro de asistencia)",
        "tool": "Codex (OpenAI)",
        "purpose": "Exposición de las partes técnicas",
        "request": "Crear y mejorar una presentación intuitiva para exponer la auditoría durante 30 minutos o más.",
        "result": "Representación visual de arquitectura, cronología, consultas, cifras y límites de evidencia; notas del expositor y enlaces a documentos.",
        "validation": "Comprobaciones locales de navegación y enlaces. La presentación general contiene el trabajo del equipo; este registro solo describe el apoyo para comunicar las partes técnicas de Oscar.",
        "source": "Conversación de esta asistencia; 06_Presentacion; 08_Revision/Registro_Asistencia_IA.csv.",
        "basis": "Apoyo de presentación observado; no acredita autoría individual del resto del proyecto"
      },
      {
        "id": "IA-O05",
        "date": "08/11/2026",
        "tool": "Codex (OpenAI)",
        "purpose": "Declaración individual de uso de IA",
        "request": "Aclaración del usuario: el documento debe corresponder únicamente a sus partes como Oscar.",
        "result": "Documento personal, registro individual de esta asistencia y corrección del apartado de IA de la presentación para Oscar, incluidos los Pasos 3, 7, 8 y 10.",
        "validation": "Revisión de Oscar pendiente. No se trasladan a Oscar las declaraciones de ChatGPT, validaciones o decisiones presupuestarias de otros integrantes.",
        "source": "Solicitud y aclaración actuales; fuentes técnicas identificadas en las entradas anteriores.",
        "basis": "Uso observado en esta conversación"
      },
      {
        "id": "IA-O06",
        "date": "07–08/11/2026 (revisión)",
        "tool": "Codex (OpenAI)",
        "purpose": "Paso 10 · hallazgos de auditoría",
        "request": "Evaluar si los hallazgos de Operación Trazabilidad son coherentes con todo el proyecto; incluir el Paso 10 entre las partes de Oscar.",
        "result": "Revisión de condición, criterio, causa hipotética, efecto, recomendación y trazabilidad de H-01 a H-05; contraste de puntajes con sus riesgos y separación entre observación preliminar e incumplimiento confirmado.",
        "validation": "La versión actual presenta H-02=20, H-03=16 y H-05=20, coincidentes con sus riesgos. La IA revisó los documentos, sin autenticar evidencia ni sustituir la revisión cruzada. El Paso 10 se incorpora al alcance individual por confirmación expresa de Oscar; la elaboración original con IA queda por precisar.",
        "source": "01_Informe/Hallazgos_Operacion_Trazabilidad.docx; Paso_10_Hallazgos_Operacion_Trazabilidad.docx (versión anterior); 02_Matrices/Matriz_Riesgos.xlsx; consulta del usuario sobre hallazgos y aclaración actual.",
        "basis": "Revisión observada; asignación individual confirmada por el usuario"
      }
    ],
    "source": "Registro_Uso_IA_Operacion_Trazabilidad_ACTUALIZADO.pdf, p. 1, filas 4–5"
  },
  "updated": "10/11/2026",
  "documents": {
    "report": {
      "name": "Informe_Final_Operacion_Trazabilidad.docx (2).pdf",
      "url": "documentos/01_Informe/Informe_Final_Operacion_Trazabilidad.docx (2).pdf"
    },
    "findings": {
      "name": "Hallazgos_Operacion_Trazabilidad.docx",
      "url": "documentos/01_Informe/Hallazgos_Operacion_Trazabilidad.docx"
    },
    "inventory": {
      "name": "Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf",
      "url": "documentos/03_Evidencias/Inventario_Cadena_Custodia_E01_E10_Integrante3_ACTUALIZADO.pdf"
    },
    "papers": {
      "name": "Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf",
      "url": "documentos/03_Evidencias/Papeles_Trabajo_PT01_PT10_Integrante3_ACTUALIZADO.pdf"
    },
    "risks": {
      "name": "Matriz_Riesgos.xlsx",
      "url": "documentos/02_Matrices/Matriz_Riesgos.xlsx"
    },
    "sql": {
      "name": "RedNova.sql",
      "url": "documentos/04_SQL/RedNova.sql"
    },
    "results": {
      "name": "Verificacion_Resultados.json",
      "url": "documentos/04_SQL/Verificacion_Resultados.json"
    },
    "integrity": {
      "name": "Verificacion_Integridad.json",
      "url": "documentos/04_SQL/Verificacion_Integridad.json"
    },
    "complement": {
      "name": "Verificacion_Referencias.json",
      "url": "documentos/04_SQL/Verificacion_Referencias.json"
    },
    "plan": {
      "name": "Plan_Accion.xlsx",
      "url": "documentos/05_PlanAccion/Plan_Accion.xlsx"
    },
    "norms": {
      "name": "Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf",
      "url": "documentos/07_UsodeIA/Matriz_Referencias_Normativas_Paso9_ACTUALIZADA.pdf"
    },
    "map": {
      "name": "Mapa_Causal.png",
      "url": "documentos/01_Informe/Mapa_Causal.png"
    },
    "control": {
      "name": "Control_Calidad_Compilacion_Integrante3_ACTUALIZADO.pdf",
      "url": "documentos/01_Informe/Control_Calidad_Compilacion_Integrante3_ACTUALIZADO.pdf"
    }
  },
  "checks": {
    "sql": [
      {
        "id": "SQL-01",
        "matches_script": true
      },
      {
        "id": "SQL-02",
        "matches_script": true
      },
      {
        "id": "SQL-03",
        "matches_script": true
      },
      {
        "id": "SQL-04",
        "matches_script": true
      },
      {
        "id": "SQL-05",
        "matches_script": true
      },
      {
        "id": "SQL-06",
        "matches_script": true
      },
      {
        "id": "SQL-07",
        "matches_script": true
      },
      {
        "id": "SQL-08",
        "matches_script": true
      },
      {
        "id": "SQL-09",
        "matches_script": true
      },
      {
        "id": "SQL-10",
        "matches_script": true
      },
      {
        "id": "SQL-11",
        "matches_script": true
      },
      {
        "id": "SQL-12",
        "matches_script": true
      }
    ],
    "sql_hash": "5e7ac7c651866c58777b2f025b174f43b577267c04db236c826a0d4b4ccc7c3f",
    "new_sql_execution": false,
    "reported_sql_date": "2026-11-05T05:36:06.3714840Z",
    "integrity_new_execution": false,
    "complement_engine": "SQLite en memoria con adaptaciones explicitas; no valida T-SQL"
  }
};
