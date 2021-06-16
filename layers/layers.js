var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionValledeSantiago_3 = new ol.format.GeoJSON();
var features_CoordinacionValledeSantiago_3 = format_CoordinacionValledeSantiago_3.readFeatures(json_CoordinacionValledeSantiago_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionValledeSantiago_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionValledeSantiago_3.addFeatures(features_CoordinacionValledeSantiago_3);
var lyr_CoordinacionValledeSantiago_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionValledeSantiago_3, 
                style: style_CoordinacionValledeSantiago_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionValledeSantiago_3.png" /> Coordinacion Valle de Santiago'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionV5_5 = new ol.format.GeoJSON();
var features_MicroregionV5_5 = format_MicroregionV5_5.readFeatures(json_MicroregionV5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionV5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionV5_5.addFeatures(features_MicroregionV5_5);
var lyr_MicroregionV5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionV5_5, 
                style: style_MicroregionV5_5,
                interactive: false,
    title: 'Microregion V5<br />\
    <img src="styles/legend/MicroregionV5_5_0.png" /> 4 - 72 Personas<br />\
    <img src="styles/legend/MicroregionV5_5_1.png" /> 72 - 172 Personas<br />\
    <img src="styles/legend/MicroregionV5_5_2.png" /> 172 - 261 Personas<br />\
    <img src="styles/legend/MicroregionV5_5_3.png" /> 261 - 456 Personas<br />\
    <img src="styles/legend/MicroregionV5_5_4.png" /> 456 - 825 Personas<br />'
        });
var format_MicroregionV4_6 = new ol.format.GeoJSON();
var features_MicroregionV4_6 = format_MicroregionV4_6.readFeatures(json_MicroregionV4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionV4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionV4_6.addFeatures(features_MicroregionV4_6);
var lyr_MicroregionV4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionV4_6, 
                style: style_MicroregionV4_6,
                interactive: false,
    title: 'Microregion V4<br />\
    <img src="styles/legend/MicroregionV4_6_0.png" /> 1 - 77 Personas<br />\
    <img src="styles/legend/MicroregionV4_6_1.png" /> 77 - 207 Personas<br />\
    <img src="styles/legend/MicroregionV4_6_2.png" /> 207 - 373 Personas<br />\
    <img src="styles/legend/MicroregionV4_6_3.png" /> 373 - 558 Personas<br />\
    <img src="styles/legend/MicroregionV4_6_4.png" /> 558 - 692 Personas<br />'
        });
var format_MicroregionV3_7 = new ol.format.GeoJSON();
var features_MicroregionV3_7 = format_MicroregionV3_7.readFeatures(json_MicroregionV3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionV3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionV3_7.addFeatures(features_MicroregionV3_7);
var lyr_MicroregionV3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionV3_7, 
                style: style_MicroregionV3_7,
                interactive: false,
    title: 'Microregion V3<br />\
    <img src="styles/legend/MicroregionV3_7_0.png" /> 2 - 45 Personas<br />\
    <img src="styles/legend/MicroregionV3_7_1.png" /> 45 - 117 Personas<br />\
    <img src="styles/legend/MicroregionV3_7_2.png" /> 117 - 206 Personas<br />\
    <img src="styles/legend/MicroregionV3_7_3.png" /> 206 - 339 Personas<br />\
    <img src="styles/legend/MicroregionV3_7_4.png" /> 339 - 500 Personas<br />'
        });
var format_MicroregionV2_8 = new ol.format.GeoJSON();
var features_MicroregionV2_8 = format_MicroregionV2_8.readFeatures(json_MicroregionV2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionV2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionV2_8.addFeatures(features_MicroregionV2_8);
var lyr_MicroregionV2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionV2_8, 
                style: style_MicroregionV2_8,
                interactive: false,
    title: 'Microregion V2<br />\
    <img src="styles/legend/MicroregionV2_8_0.png" /> 3 - 20 Personas<br />\
    <img src="styles/legend/MicroregionV2_8_1.png" /> 20 - 50 Personas<br />\
    <img src="styles/legend/MicroregionV2_8_2.png" /> 50 - 168 Personas<br />\
    <img src="styles/legend/MicroregionV2_8_3.png" /> 168 - 456 Personas<br />\
    <img src="styles/legend/MicroregionV2_8_4.png" /> 456 - 747 Personas<br />'
        });
var format_MicroregionV1_9 = new ol.format.GeoJSON();
var features_MicroregionV1_9 = format_MicroregionV1_9.readFeatures(json_MicroregionV1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionV1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionV1_9.addFeatures(features_MicroregionV1_9);
var lyr_MicroregionV1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionV1_9, 
                style: style_MicroregionV1_9,
                interactive: false,
    title: 'Microregion V1<br />\
    <img src="styles/legend/MicroregionV1_9_0.png" /> 2 - 17 Personas<br />\
    <img src="styles/legend/MicroregionV1_9_1.png" /> 17 - 37 Personas<br />\
    <img src="styles/legend/MicroregionV1_9_2.png" /> 37 - 70 Personas<br />\
    <img src="styles/legend/MicroregionV1_9_3.png" /> 70 - 153 Personas<br />\
    <img src="styles/legend/MicroregionV1_9_4.png" /> 153 - 280 Personas<br />'
        });
var format_MicroregionJP1_10 = new ol.format.GeoJSON();
var features_MicroregionJP1_10 = format_MicroregionJP1_10.readFeatures(json_MicroregionJP1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionJP1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionJP1_10.addFeatures(features_MicroregionJP1_10);
var lyr_MicroregionJP1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionJP1_10, 
                style: style_MicroregionJP1_10,
                interactive: false,
    title: 'Microregion JP1<br />\
    <img src="styles/legend/MicroregionJP1_10_0.png" /> 19 - 43 Personas<br />\
    <img src="styles/legend/MicroregionJP1_10_1.png" /> 2 - 19 Personas<br />\
    <img src="styles/legend/MicroregionJP1_10_2.png" /> 261 - 471 Personas<br />\
    <img src="styles/legend/MicroregionJP1_10_3.png" /> 43 - 92 Personas<br />\
    <img src="styles/legend/MicroregionJP1_10_4.png" /> 92 - 261 Personas<br />'
        });
var format_CoordinacionValledeSantiago_11 = new ol.format.GeoJSON();
var features_CoordinacionValledeSantiago_11 = format_CoordinacionValledeSantiago_11.readFeatures(json_CoordinacionValledeSantiago_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionValledeSantiago_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionValledeSantiago_11.addFeatures(features_CoordinacionValledeSantiago_11);
var lyr_CoordinacionValledeSantiago_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionValledeSantiago_11, 
                style: style_CoordinacionValledeSantiago_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionValledeSantiago_11.png" /> Coordinacion Valle de Santiago'
            });
var group_CoordinacionValledeSantiagoRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionV5_5,lyr_MicroregionV4_6,lyr_MicroregionV3_7,lyr_MicroregionV2_8,lyr_MicroregionV1_9,lyr_MicroregionJP1_10,],
                                title: "Coordinacion Valle de Santiago Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionValledeSantiago_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionValledeSantiago_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionV5_5.setVisible(true);lyr_MicroregionV4_6.setVisible(true);lyr_MicroregionV3_7.setVisible(true);lyr_MicroregionV2_8.setVisible(true);lyr_MicroregionV1_9.setVisible(true);lyr_MicroregionJP1_10.setVisible(true);lyr_CoordinacionValledeSantiago_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionValledeSantiagoRezago,lyr_CoordinacionValledeSantiago_11];
lyr_CoordinacionValledeSantiago_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionV5_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionV4_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionV3_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionV2_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionV1_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionJP1_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionValledeSantiago_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionValledeSantiago_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionV5_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionV4_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionV3_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionV2_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionV1_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionJP1_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionValledeSantiago_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionValledeSantiago_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionV5_5.set('fieldLabels', {});
lyr_MicroregionV4_6.set('fieldLabels', {});
lyr_MicroregionV3_7.set('fieldLabels', {});
lyr_MicroregionV2_8.set('fieldLabels', {});
lyr_MicroregionV1_9.set('fieldLabels', {});
lyr_MicroregionJP1_10.set('fieldLabels', {});
lyr_CoordinacionValledeSantiago_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionValledeSantiago_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});