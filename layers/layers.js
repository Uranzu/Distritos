var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PARO_RGI_Secciones_1 = new ol.format.GeoJSON();
var features_PARO_RGI_Secciones_1 = format_PARO_RGI_Secciones_1.readFeatures(json_PARO_RGI_Secciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARO_RGI_Secciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARO_RGI_Secciones_1.addFeatures(features_PARO_RGI_Secciones_1);
var lyr_PARO_RGI_Secciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARO_RGI_Secciones_1, 
                style: style_PARO_RGI_Secciones_1,
                interactive: true,
                title: '<img src="styles/legend/PARO_RGI_Secciones_1.png" /> PARO_RGI_Secciones'
            });
var format_PARO_RGI_Distritos_2 = new ol.format.GeoJSON();
var features_PARO_RGI_Distritos_2 = format_PARO_RGI_Distritos_2.readFeatures(json_PARO_RGI_Distritos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARO_RGI_Distritos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARO_RGI_Distritos_2.addFeatures(features_PARO_RGI_Distritos_2);
var lyr_PARO_RGI_Distritos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARO_RGI_Distritos_2, 
                style: style_PARO_RGI_Distritos_2,
                interactive: true,
                title: '<img src="styles/legend/PARO_RGI_Distritos_2.png" /> PARO_RGI_Distritos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PARO_RGI_Secciones_1.setVisible(true);lyr_PARO_RGI_Distritos_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PARO_RGI_Secciones_1,lyr_PARO_RGI_Distritos_2];
lyr_PARO_RGI_Secciones_1.set('fieldAliases', {'SECCION_ID': 'SECCION_ID', 'TERRITORIO': 'TERRITORIO', 'MUNICIPIO': 'MUNICIPIO', 'PARO': 'PARO', 'RGI': 'RGI', 'NUM_SECC': 'NUM_SECC', });
lyr_PARO_RGI_Distritos_2.set('fieldAliases', {'DISTRIT_ID': 'DISTRIT_ID', 'TERRITORIO': 'TERRITORIO', 'MUNICIPIO': 'MUNICIPIO', 'PARO': 'PARO', 'RGI': 'RGI', 'NUM_DIST': 'NUM_DIST', });
lyr_PARO_RGI_Secciones_1.set('fieldImages', {'SECCION_ID': 'TextEdit', 'TERRITORIO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'PARO': 'TextEdit', 'RGI': 'TextEdit', 'NUM_SECC': 'Range', });
lyr_PARO_RGI_Distritos_2.set('fieldImages', {'DISTRIT_ID': 'TextEdit', 'TERRITORIO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'PARO': 'TextEdit', 'RGI': 'TextEdit', 'NUM_DIST': 'Range', });
lyr_PARO_RGI_Secciones_1.set('fieldLabels', {'SECCION_ID': 'no label', 'TERRITORIO': 'no label', 'MUNICIPIO': 'no label', 'PARO': 'no label', 'RGI': 'no label', 'NUM_SECC': 'no label', });
lyr_PARO_RGI_Distritos_2.set('fieldLabels', {'DISTRIT_ID': 'no label', 'TERRITORIO': 'no label', 'MUNICIPIO': 'no label', 'PARO': 'no label', 'RGI': 'no label', 'NUM_DIST': 'no label', });
lyr_PARO_RGI_Distritos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});