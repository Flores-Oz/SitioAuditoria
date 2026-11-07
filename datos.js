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
  "sql": [
    {
      "id": "SQL-01",
      "objective": "Cuentas con baja laboral que siguen activas",
      "evidence": "E-01",
      "rows": "1",
      "result": "Coincidencia en los datos sintéticos",
      "limit": "Una fila simulada evidencia una cuenta activa tras baja; no acredita un caso real.",
      "query": "-- LIMITACION: Una fila simulada evidencia una cuenta activa tras baja; no acredita un caso real.\nSELECT u.Codigo AS Usuario, u.FechaBaja, u.Activo\nFROM dbo.Usuarios AS u\nWHERE u.FechaBaja IS NOT NULL AND u.Activo = 1\nORDER BY u.Codigo;"
    },
    {
      "id": "SQL-02",
      "objective": "Cuentas administrativas compartidas",
      "evidence": "E-01",
      "rows": "1",
      "result": "Coincidencia en los datos sintéticos",
      "limit": "Cuenta compartida ficticia; requiere registros de atribución individual.",
      "query": "-- LIMITACION: Cuenta compartida ficticia; requiere registros de atribución individual.\nSELECT u.Codigo AS Usuario, p.Recurso, p.Nivel\nFROM dbo.Usuarios AS u\nJOIN dbo.Privilegios AS p ON p.UsuarioId = u.UsuarioId\nWHERE u.CuentaCompartida = 1 AND p.Vigente = 1\nORDER BY u.Codigo;"
    },
    {
      "id": "SQL-03",
      "objective": "Sesiones remotas exitosas sin MFA",
      "evidence": "E-02",
      "rows": "1",
      "result": "ext_ops_04 · 2026-10-14 02:17:00",
      "limit": "Muestra la sesión sin MFA; no demuestra por sí sola que esa cuenta causara el ataque.",
      "query": "-- LIMITACION: Muestra la sesión sin MFA; no demuestra por sí sola que esa cuenta causara el ataque.\nSELECT u.Codigo AS Usuario, s.FechaInicio, s.TipoAcceso, s.MfaUsado, s.IpOrigen\nFROM dbo.Sesiones AS s JOIN dbo.Usuarios AS u ON u.UsuarioId = s.UsuarioId\nWHERE s.TipoAcceso = N'VPN' AND s.Resultado = N'EXITOSO'\n  AND s.MfaUsado = 0\nORDER BY s.FechaInicio;"
    },
    {
      "id": "SQL-04",
      "objective": "Lecturas masivas registradas",
      "evidence": "E-03",
      "rows": "1",
      "result": "31840 filas (resumen)",
      "limit": "31,840 filas es dato preliminar del caso representado en laboratorio; no hay atribución autenticada.",
      "query": "-- LIMITACION: 31,840 filas es dato preliminar del caso representado en laboratorio; no hay atribución autenticada.\nSELECT FechaHora, Objeto, FilasLeidas, Origen, UsuarioId, SesionId\nFROM dbo.BitacoraConsultas WHERE FilasLeidas >= 10000\nORDER BY FechaHora;"
    },
    {
      "id": "SQL-05",
      "objective": "Concentración de cambios de órdenes",
      "evidence": "E-05",
      "rows": "1",
      "result": "216 cambios / minuto",
      "limit": "216 cambios se representan como simulación. No consta usuario responsable ni autorización.",
      "query": "-- LIMITACION: 216 cambios se representan como simulación. No consta usuario responsable ni autorización.\nSELECT CONVERT(VARCHAR(16), h.FechaHora, 120) AS Minuto,\n       COUNT(*) AS TotalCambios, COUNT(DISTINCT h.OrdenId) AS OrdenesDistintas\nFROM dbo.HistorialOrdenes AS h\nGROUP BY CONVERT(VARCHAR(16), h.FechaHora, 120)\nHAVING COUNT(*) >= 50 ORDER BY Minuto;"
    },
    {
      "id": "SQL-06",
      "objective": "Despliegues sin evidencia de aprobación formal",
      "evidence": "E-06",
      "rows": "1",
      "result": "Coincidencia en los datos sintéticos",
      "limit": "NULL significa aprobación no documentada, NO prueba que nunca existiera una autorización.",
      "query": "-- LIMITACION: NULL significa aprobación no documentada, NO prueba que nunca existiera una autorización.\nSELECT CambioId, FechaHora, Sistema, Version, Ticket, AprobacionFormal\nFROM dbo.CambiosSistema WHERE AprobacionFormal IS NULL OR AprobacionFormal = 0\nORDER BY FechaHora;"
    },
    {
      "id": "SQL-07",
      "objective": "Alertas críticas pendientes de cierre",
      "evidence": "E-07",
      "rows": "1",
      "result": "Coincidencia en los datos sintéticos",
      "limit": "Que falte cierre documental no demuestra que nadie haya respondido.",
      "query": "-- LIMITACION: Que falte cierre documental no demuestra que nadie haya respondido.\nSELECT AlertaId, FechaHora, Severidad, Estado, FechaCierre\nFROM dbo.Alertas WHERE Severidad = N'CRITICA' AND FechaCierre IS NULL\nORDER BY FechaHora;"
    },
    {
      "id": "SQL-08",
      "objective": "Respaldos sin restauración reciente o verificación",
      "evidence": "E-08",
      "rows": "2",
      "result": "Coincidencia en los datos sintéticos",
      "limit": "Umbral de 90 días: criterio de laboratorio a validar contra política y BIA del cliente.",
      "query": "-- LIMITACION: Umbral de 90 días: criterio de laboratorio a validar contra política y BIA del cliente.\nSELECT Sistema, MAX(FechaBackup) AS UltimoBackup,\n       MIN(CAST(IntegridadVerificada AS INT)) AS IntegridadMinima,\n       MIN(CAST(RestauracionProbada AS INT)) AS RestauracionMinima,\n       MAX(FechaUltimaRestauracion) AS UltimaRestauracion\nFROM dbo.Backups\nGROUP BY Sistema\nHAVING MIN(CAST(IntegridadVerificada AS INT)) = 0\n    OR MIN(CAST(RestauracionProbada AS INT)) = 0\n    OR MAX(FechaUltimaRestauracion) IS NULL\n    OR DATEDIFF(DAY, MAX(FechaUltimaRestauracion), '2026-10-14T00:00:00') > 90\nORDER BY Sistema;"
    },
    {
      "id": "SQL-09",
      "objective": "Transferencias sin clasificación de contenido",
      "evidence": "E-04",
      "rows": "1",
      "result": "1,600,000,000 bytes sin clasificación",
      "limit": "El volumen no demuestra fuga. Se requieren destino, contenido, proceso originador y contexto de red.",
      "query": "-- LIMITACION: El volumen no demuestra fuga. Se requieren destino, contenido, proceso originador y contexto de red.\nSELECT TransferenciaId, FechaHora, BytesTransferidos, Destino,\n       ClasificacionContenido, EstadoAutorizacion, SesionId\nFROM dbo.Transferencias\nWHERE ClasificacionContenido IS NULL OR EstadoAutorizacion = N'NO_VERIFICADA'\nORDER BY FechaHora;"
    },
    {
      "id": "SQL-10",
      "objective": "Órdenes con identificador comercial duplicado",
      "evidence": "E-05",
      "rows": "1",
      "result": "2 órdenes comparten código",
      "limit": "Dos órdenes sintéticas comparten un código; no es un duplicado acreditado del caso.",
      "query": "-- LIMITACION: Dos órdenes sintéticas comparten un código; no es un duplicado acreditado del caso.\nSELECT Codigo, COUNT(*) AS Duplicados\nFROM dbo.Ordenes GROUP BY Codigo HAVING COUNT(*) > 1\nORDER BY Codigo;"
    },
    {
      "id": "SQL-11",
      "objective": "Sesiones fuera del horario operativo de ejemplo",
      "evidence": "E-02",
      "rows": "1",
      "result": "Acceso a 2026-10-14 02:17:00",
      "limit": "El tramo 06:00 a 21:59 es ficticio; un acceso nocturno no demuestra irregularidad sin política de horarios.",
      "query": "-- LIMITACION: El tramo 06:00 a 21:59 es ficticio; un acceso nocturno no demuestra irregularidad sin política de horarios.\nSELECT u.Codigo AS Usuario, s.FechaInicio, s.TipoAcceso\nFROM dbo.Sesiones AS s JOIN dbo.Usuarios AS u ON u.UsuarioId = s.UsuarioId\nWHERE DATEPART(HOUR, s.FechaInicio) < 6 OR DATEPART(HOUR, s.FechaInicio) >= 22\nORDER BY s.FechaInicio;"
    },
    {
      "id": "SQL-12",
      "objective": "Intervalo anómalo entre respaldos del mismo sistema",
      "evidence": "E-08",
      "rows": "1",
      "result": "25 horas entre backups",
      "limit": "Intervalo >24h es un umbral de laboratorio; comprobar frecuencias aprobadas por sistema.",
      "query": "-- LIMITACION: Intervalo >24h es un umbral de laboratorio; comprobar frecuencias aprobadas por sistema.\nWITH Ordenados AS (\n  SELECT Sistema, FechaBackup,\n         LAG(FechaBackup) OVER (PARTITION BY Sistema ORDER BY FechaBackup) AS BackupAnterior\n  FROM dbo.Backups\n)\nSELECT Sistema, BackupAnterior, FechaBackup,\n       DATEDIFF(HOUR, BackupAnterior, FechaBackup) AS HorasEntreBackups\nFROM Ordenados\nWHERE BackupAnterior IS NOT NULL AND DATEDIFF(HOUR, BackupAnterior, FechaBackup) > 24\nORDER BY Sistema;"
    }
  ],
  "timeline": [
    {
      "date": "12/10/2026 16:15",
      "event": "Proveedor solicita renovación de privilegios API",
      "source": "Ticket / proveedor",
      "limit": "Pendiente de corroboración"
    },
    {
      "date": "14/10/2026 02:17",
      "event": "Login remoto ext_ops_04 sin MFA",
      "source": "IdP / VPN; E-02",
      "limit": "Preliminar"
    },
    {
      "date": "14/10/2026 02:26",
      "event": "Elevación de privilegios",
      "source": "IAM",
      "limit": "Atribución no probada"
    },
    {
      "date": "14/10/2026 02:31",
      "event": "Lectura masiva: 31,840 filas",
      "source": "SQL Server; E-03",
      "limit": "Origen de resumen no autenticado"
    },
    {
      "date": "14/10/2026 02:35",
      "event": "Tráfico saliente ~1.6 GB",
      "source": "Cloud/Proxy; E-04",
      "limit": "Contenido desconocido; fuga no confirmada"
    },
    {
      "date": "14/10/2026 02:42",
      "event": "Modificación de 216 órdenes",
      "source": "CRM; E-05",
      "limit": "Actor desconocido"
    },
    {
      "date": "14/10/2026 03:02",
      "event": "Despliegue de integración",
      "source": "CI/CD; E-06",
      "limit": "Aprobación no documentada"
    },
    {
      "date": "14/10/2026 03:18",
      "event": "Alerta crítica",
      "source": "SIEM; E-07",
      "limit": "Cierre no documentado"
    },
    {
      "date": "14/10/2026 03:42",
      "event": "CRM indisponible / cifrado aparente",
      "source": "EDR / CRM",
      "limit": "Cifrado pendiente de confirmar"
    },
    {
      "date": "14/10/2026 04:05",
      "event": "Se solicita recuperación",
      "source": "Equipo de continuidad",
      "limit": "Cronología preliminar"
    },
    {
      "date": "14/10/2026 08:57",
      "event": "CRM retorna solo lectura",
      "source": "CRM",
      "limit": "5 h 15 min tras caída"
    },
    {
      "date": "14/10/2026 09:37",
      "event": "CRM recupera escritura",
      "source": "CRM",
      "limit": "5 h 55 min tras caída"
    },
    {
      "date": "14/10/2026 11:15",
      "event": "Finanzas solicita conciliación",
      "source": "ERP / Finanzas",
      "limit": "No consta conciliación final"
    }
  ],
  "evidence": [
    {
      "id": "E-01",
      "name": "Usuarios y privilegios",
      "description": "Cuentas activas sin recertificación reciente.",
      "source": "Resumen del expediente académico; exportación original pendiente.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-02",
      "name": "Acceso VPN",
      "description": "Sesión externa sin MFA; cronología indica 14/10/2026 02:17 (UTC−6).",
      "source": "Resumen del expediente y cronología; logs originales pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-03",
      "name": "Bitácora SQL Server",
      "description": "Lectura reportada de 31,840 registros; cronología indica 14/10/2026 02:31.",
      "source": "Resumen del expediente y cronología; auditoría SQL original pendiente.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-04",
      "name": "Tráfico cloud",
      "description": "Transferencia reportada de aproximadamente 1.6 GB; cronología indica 14/10/2026 02:35.",
      "source": "Resumen del expediente y cronología; registros de red/cloud pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-05",
      "name": "Cambios del CRM",
      "description": "216 órdenes modificadas; cronología indica 14/10/2026 02:42.",
      "source": "Resumen del expediente y cronología; historial original del CRM pendiente.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-06",
      "name": "Ticket de cambios",
      "description": "Aprobación final no documentada; despliegue reportado a las 03:02 del 14/10/2026.",
      "source": "Resumen del expediente y cronología; ticket y registros CI/CD pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-07",
      "name": "Alertas de seguridad",
      "description": "Alerta crítica reportada a las 03:18 del 14/10/2026, sin cierre documentado.",
      "source": "Resumen del expediente y cronología; eventos SIEM y ticket pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-08",
      "name": "Respaldos",
      "description": "Respaldos programados; no se reportan pruebas recientes de restauración.",
      "source": "Resumen del expediente y declaración de continuidad; logs y actas pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-09",
      "name": "Contrato del tercero",
      "description": "SLA reportado de 99.9 % y SOC 2 con cobertura parcial según el expediente.",
      "source": "Descripción resumida del expediente; contrato e informe SOC 2 pendientes.",
      "status": "Pendiente de validación"
    },
    {
      "id": "E-10",
      "name": "Chatbot con IA",
      "description": "Sesión anómala reportada con valor 0.08; escala y umbral no especificados.",
      "source": "Resumen del expediente; logs y configuración del chatbot pendientes.",
      "status": "Pendiente de validación"
    }
  ],
  "files": [
    {
      "name": "01 Plan Auditoria",
      "filename": "01_Plan_Auditoria.docx",
      "category": "01_Informe",
      "type": "DOCX",
      "url": "documentos/01_Informe/01_Plan_Auditoria.docx",
      "size": 757019,
      "sha256": "cdd0ea91203ac23c39dcbf18d9499e8b4b40049efd51f944b87f3963be78704c"
    },
    {
      "name": "Control Calidad Compilacion Operacion Trazabilidad",
      "filename": "Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "category": "01_Informe",
      "type": "XLSX",
      "url": "documentos/01_Informe/Control_Calidad_Compilacion_Operacion_Trazabilidad.xlsx",
      "size": 8044,
      "sha256": "eb627cbd7ffc12349ecad8304b109cefad0c157839b4bf3a1031967662c30f25"
    },
    {
      "name": "Matriz Riesgos",
      "filename": "Matriz_Riesgos.xlsx",
      "category": "02_Matrices",
      "type": "XLSX",
      "url": "documentos/02_Matrices/Matriz_Riesgos.xlsx",
      "size": 43241,
      "sha256": "148a2f633e2974a129a5731b5252ce42fa16e425c48b0d3dbf5f5e49cd6a5514"
    },
    {
      "name": "Plantillas Paso 9 TPRM Privacidad IA",
      "filename": "Plantillas_Paso_9_TPRM_Privacidad_IA.xlsx",
      "category": "02_Matrices",
      "type": "XLSX",
      "url": "documentos/02_Matrices/Plantillas_Paso_9_TPRM_Privacidad_IA.xlsx",
      "size": 34215,
      "sha256": "c23a31c940bff60ee047bc3ccbd67ebf8d52ea66a38eeabd3dbf1f01e1d970e4"
    },
    {
      "name": "Arquitectura Logica Con Notas",
      "filename": "Arquitectura_Logica_Con_Notas.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Arquitectura_Logica_Con_Notas.pdf",
      "size": 807361,
      "sha256": "41b46e34b427f442573e9f063219af897f7e25b5a4ae25d883e1c78dc29598f3"
    },
    {
      "name": "Evaluacion y Notas Paso",
      "filename": "Evaluacion_y_Notas_Paso.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Evaluacion_y_Notas_Paso.pdf",
      "size": 162313,
      "sha256": "e8dbdf9620717c4077a515857e2a431ee3bd394bb53513250866ef0820493794"
    },
    {
      "name": "Flujo Comercial Con Notas",
      "filename": "Flujo_Comercial_Con_Notas.pdf",
      "category": "03_Evidencias",
      "type": "PDF",
      "url": "documentos/03_Evidencias/Flujo_Comercial_Con_Notas.pdf",
      "size": 804517,
      "sha256": "a794c1cdcf025a3ee5599a5f27e7dd13d0f20419fef79373fe53a41372ea6028"
    },
    {
      "name": "Inventario y Cadena Custodia E01 E10",
      "filename": "Inventario_y_Cadena_Custodia_E01_E10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/03_Evidencias/Inventario_y_Cadena_Custodia_E01_E10.xlsx",
      "size": 13591,
      "sha256": "0a499adabe3c016566bf88272cc73f9f7da33650666c527ef769108db06185a0"
    },
    {
      "name": "Papeles Trabajo Editables PT01 PT10",
      "filename": "Papeles_Trabajo_Editables_PT01_PT10.xlsx",
      "category": "03_Evidencias",
      "type": "XLSX",
      "url": "documentos/03_Evidencias/Papeles_Trabajo_Editables_PT01_PT10.xlsx",
      "size": 41478,
      "sha256": "8efeec6f511806eaceb5b17ee94b40d753236e666a382af0d6863b133c381eb6"
    },
    {
      "name": "Diccionario Datos",
      "filename": "Diccionario_Datos.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/Diccionario_Datos.pdf",
      "size": 73520,
      "sha256": "b0a7881205d1ebe2035d4debc29239f075af17e7f9dca6626802da17ab6a692b"
    },
    {
      "name": "Evidencias SQLServer",
      "filename": "Evidencias_SQLServer.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/Evidencias_SQLServer.pdf",
      "size": 102620,
      "sha256": "7b53078759be3c2d644c9663fed437bcbe73b876f6e9638ae76a4995727fe7de"
    },
    {
      "name": "INFORME VERIFICACION",
      "filename": "INFORME_VERIFICACION.pdf",
      "category": "04_SQL",
      "type": "PDF",
      "url": "documentos/04_SQL/INFORME_VERIFICACION.pdf",
      "size": 68982,
      "sha256": "3fd83a00dc00b4c90761acd51b57c0b9f8ad3b8d57ed91e85b1633c92595d36e"
    },
    {
      "name": "Matriz Resultados y Trazabilidad VERIFICADA",
      "filename": "Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsx",
      "category": "04_SQL",
      "type": "XLSX",
      "url": "documentos/04_SQL/Matriz_Resultados_y_Trazabilidad_VERIFICADA.xlsx",
      "size": 18959,
      "sha256": "522bc77414e2c443f587f21306ea270308cc33f3b7bf5663a213e3ce37b04d61"
    },
    {
      "name": "RedNova",
      "filename": "RedNova.sql",
      "category": "04_SQL",
      "type": "SQL",
      "url": "documentos/04_SQL/RedNova.sql",
      "size": 51619,
      "sha256": "5e7ac7c651866c58777b2f025b174f43b577267c04db236c826a0d4b4ccc7c3f"
    },
    {
      "name": "Matriz Referencias Normativas Paso9",
      "filename": "Matriz_Referencias_Normativas_Paso9.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/07_UsodeIA/Matriz_Referencias_Normativas_Paso9.xlsx",
      "size": 11191,
      "sha256": "5a77ba31be1dbdaea3c87e4e2a26d31e5c6e3d7f5d46e5df5905e18b21cac0e9"
    },
    {
      "name": "Registro Uso IA Proyecto Operacion Trazabilidad",
      "filename": "Registro_Uso_IA_Proyecto_Operacion_Trazabilidad.xlsx",
      "category": "07_UsodeIA",
      "type": "XLSX",
      "url": "documentos/07_UsodeIA/Registro_Uso_IA_Proyecto_Operacion_Trazabilidad.xlsx",
      "size": 7520,
      "sha256": "d53d2b54c6f7e60a7c5a4061e044f7b5a0fd047e1bfe573c90f57cbaacc75320"
    }
  ]
};
