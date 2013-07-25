$(document).ready(function() {
	$('#gridTitle').click(function() {
		if ($(this).val() == "Show Title") 
		{
			$(this).val("Hide Title");
			$(".ui-jqgrid-titlebar").show();
		}
		else 
		{
			$(this).val("Show Title");
			$(".ui-jqgrid-titlebar").hide();
		}
	});
	
	$('#gridPagination').click(function() {
		if ($(this).val() == "Show Pagination") 
		{
			$(this).val("Hide Pagination");
			$(".ui-jqgrid-pager").show();
		}
		else 
		{
			$(this).val("Show Pagination");
			$(".ui-jqgrid-pager").hide();
		}
	});
	
	buildUpperGrid();
		
	jQuery("#labGrid").jqGrid('navGrid','#pager2',{edit:false,add:false,del:false});
						 
});

function buildUpperGrid()
{
	$("#labGrid").jqGrid({
		url: 'ajax/getGridData.php',
		datatype: 'json',
		colNames:['id','Test Name', 'Order', 'Order Date','Results','Result Date','Reports','Report Date'],
		colModel : [
		{name:'id',index:'id', hidden:true,width:55},
	   	{name:'TestName',index:'TestName', width:295},
   		{name:'Orders',index:'Orders', width:60, align:"center"},
   		{name:'OrderDate',index:'OrderDate', width:120, align:"center"},
   		{name:'Results',index:'Results', width:60, align:"center"},		
   		{name:'ResultDate',index:'ResultDate', width:120,align:"center"},		
   		{name:'Reports',index:'Reports', width:60, align:"center"},
		{name:'ReportDate',index:'ReportDate', width:120, align:"center"}			
			],
		rowNum:7,
	   	rowList:[10,20,30],
		pager: '#pager2',
	   	sortname: 'id',
		scroll:true,
	    viewrecords: true,
	    sortorder: "desc",
	    caption:"JSON Example"
	});
}
