function treeMenu(trList)
{
	trMenu = document.getElementById(trList).style;
	if (trMenu.display == 'none')
	{
		trMenu.display = "block";
	}
	else
	{
		trMenu.display = "none";
	}
}
