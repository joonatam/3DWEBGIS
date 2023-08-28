let modelos = new Map();
modelos.set(1185234, "einstein");
modelos.set(1385210, "davinci");
modelos.set(1185244, "Auditorio");
modelos.set(1185399, "Posgrados");
modelos.set(1185366, "postgrados");
modelos.set(1185362, "postgrados");
modelos.set(1185243, "administrativos");
modelos.set(1185245, "bienestar");
modelos.set(1185246, "labquimica1");
modelos.set(1185247, "labcontrolbiologico2");
modelos.set(1185248, "bloque3");
modelos.set(1185250, "bloque4");
modelos.set(1185253, "labsuelos5");
modelos.set(1185256, "labanatomia6");
modelos.set(1185258, "facuagronomica7");
modelos.set(1185259, "bloque8");
modelos.set(1185260, "bloque9");
modelos.set(1185266, "Preu10");
modelos.set(1185272, "counillanos11");
modelos.set(1185310, "bloque12");
modelos.set(1185311, "bloque13");
modelos.set(1185314, "bloque14");
modelos.set(1185315, "facucienciashumanas15");
modelos.set(1185317, "bloque16");
modelos.set(1185328, "bloque17");
modelos.set(1185329, "bloque18");
modelos.set(1185330, "bloque19");
modelos.set(1185335, "bloque20");
modelos.set(1185336, "bloque21");
modelos.set(1185337, "bloque22");
modelos.set(1185343, "bloque23");
modelos.set(1185345, "bloque24");
modelos.set(1185348, "bloque25");
modelos.set(1185350, "bloque26");
modelos.set(1185353, "bloque27");
modelos.set(1185352, "bloque28");
modelos.set(1185354, "bloque29");
modelos.set(1185358, "bloque30");
modelos.set(1185359, "bloque31");
modelos.set(1185358, "bloque32");
modelos.set(1185392, "bloque36");
modelos.set(1185388, "bloque37");
modelos.set(1185385, "bloque34");
modelos.set(1185382, "bloque40");
modelos.set(1185379, "bloque41");
modelos.set(1185389, "bloque41alimento");
modelos.set(1185371, "casetasiall");
modelos.set(1185361, "coliseo");

modelos.set(1185242, "almacenagro");
function Tile3d ()
{

    for (let id of modelos.keys())
    {
        tileset = new Cesium.Cesium3DTileset(
            {
                url: Cesium.IonResource.fromAssetId(id),
                dynamicScreenSpaceError : true,
                dynamicScreenSpaceErrorDensity : 0.00278,
                dynamicScreesnSpaceErrorFactor : 4.0,
                dynamicScreenSpaceErrorHeightFalloff : 0.25,
            }
        );
        viewer.scene.primitives.add(tileset);
    }
}