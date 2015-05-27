/*
 * To use copy `ui.js` it to `/mlds-demo/ui/ui.js`
 */
var ui = {
    /* Bind functions and values */
    ready: function() {

    },

    onEachFeatureHandler: function(feature, layer) {
        layer.bindPopup(feature.properties['Name.x'] + '<br>' + feature.properties.City + '<br> Cluster: ' + feature.properties.cluster);
    },

    pointToLayerHandler: function(feature, latlng) {
        var CLUSTER_COLORS = {
            1: '#F8766D',
            2: '#C49A00',
            3: '#53B400',
            4: '#02C094',
            5: '#00B6EB',
            6: '#A58AFF',
            7: '#FB61D7',
        };

        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: CLUSTER_COLORS[feature.properties.cluster],
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        });
    }
};
