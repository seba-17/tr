# PNK Inmobiliaria - Mapas con OpenStreetMap

## ✅ Mapas implementados con OpenStreetMap + Leaflet

Los mapas ahora usan **OpenStreetMap** con la librería **Leaflet.js**, que es completamente gratuita y no requiere API keys.

### Ventajas de esta implementación:

- ✅ **Sin API Key necesaria** - Funciona inmediatamente
- ✅ **Completamente gratuita** - Sin límites de uso
- ✅ **Código abierto** - Basado en OpenStreetMap
- ✅ **Ligero y rápido** - Solo 2 archivos externos
- ✅ **Funciona offline** - Una vez cargado el mapa

### Archivos incluidos automáticamente:

```html
<!-- CSS de Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- JavaScript de Leaflet -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

### Ubicaciones de las propiedades:

- **Casa**: Sector El Milagro, La Serena (-29.9045, -71.2489)
- **Departamento**: Peñuelas, Coquimbo (-29.9078, -71.2500)
- **Terreno**: Ovalle (-30.5983, -71.1997)

### Características del mapa:

- Zoom nivel 15 con posibilidad de hacer zoom
- Marcador azul con popup informativo
- Popup se abre automáticamente al cargar
- Mapa interactivo (arrastrar, zoom con mouse/rueda)
- Atribución automática a OpenStreetMap

### Cómo funciona:

1. Los mapas se cargan desde servidores de OpenStreetMap
2. No hay límites de uso ni costos
3. Los mapas funcionan en cualquier navegador moderno
4. Se puede hacer zoom y mover el mapa libremente

### Para modificar coordenadas:

Si necesitas cambiar las coordenadas de alguna propiedad, edita las variables `lat` y `lng` en la función `initMap()` de cada archivo HTML.

### Notas técnicas:

- Los mapas se cargan de forma asíncrona desde unpkg.com
- Si hay problemas de conectividad, los mapas no se cargarán
- Leaflet es compatible con todos los navegadores modernos
- El mapa incluye automáticamente la atribución requerida por OpenStreetMap