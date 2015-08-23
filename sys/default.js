function def(){
	$("#seedtxt").css("display", "none");
	$("#seedtxt").val("");
	$("#seedtxt").attr("autofocus","false");

};

function chan(){
	$("#seedtxt").css("display", "inline");
	$("#seedtxt").val("");
	$("#seedtxt").attr("autofocus","true");
};

function today(){
	var obj = new Date();
	var dia = obj.getDate();
	if(obj.getMonth()>8){
		var mes = obj.getMonth()+1;
	}else{
		var mes = obj.getMonth()+1;
		var mes = "0"+mes;
	}
	var agno = obj.getFullYear();
	var fecha = agno+"-"+mes+"-"+dia;
	return fecha;
};

$(document).ready(function(e) {
	var fecha = today();
    $("#inicio").val(fecha);
	$("#fin").val(fecha);
});


function gen(){
	var inicio = $("#inicio").val();
	var fin = $("#fin").val();
	
	var splitInicio = inicio.split('-'); 
	var splitFin = fin.split('-');
	var mesInicio = parseInt(splitInicio[1],10);
	var fechaInicio = Date.UTC(splitInicio[0],mesInicio-1,splitInicio[2]);
	var mesFin = parseInt(splitFin[1],10); 
	var fechaFin = Date.UTC(splitFin[0],mesFin-1,splitFin[2]); 
	var dif = fechaFin - fechaInicio;
	var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
	
	var generado="";
	var fechaGen = "";
  	
	for(var i=0; i<=dias;i++){
		fechaGen = sumarD(i,splitInicio[2]+"-"+mesInicio+"-"+splitInicio[0]);
		fechaGenSp = fechaGen.split('-');

		generado = generado + "<h3>" + GenArrisPasswords(fechaGenSp[2],fechaGenSp[1]-1, fechaGenSp[0])+"</h3><h4>"+ fechaGen+ "</h4><hr>";
	}
	$("#keys").html(generado);
}

function sumarD(d, fecha)
{
	var Fecha = new Date();
	var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
	var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
	var aFecha = sFecha.split(sep);
	var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
	fecha= new Date(fecha);
	fecha.setDate(fecha.getDate()+parseInt(d));
	var anno=fecha.getFullYear();
	var mes= fecha.getMonth()+1;
	var dia= fecha.getDate();
	mes = (mes < 10) ? ("0" + mes) : mes;
	dia = (dia < 10) ? ("0" + dia) : dia;
	var fechaFinal = dia+sep+mes+sep+anno;
	return (fechaFinal);
 }