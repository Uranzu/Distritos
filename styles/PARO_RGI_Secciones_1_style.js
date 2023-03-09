var size = 0;
var placement = 'point';

var style_PARO_RGI_Secciones_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Liberation Sans\', sans-serif";
    var labelFill = "#be0000";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.6000000000000001;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NUM_SECC") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("NUM_SECC"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
