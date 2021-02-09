document.getElementById('zaloguj').addEventListener('click', 
function() 
{
	window.scrollTo(0, 0);
	document.querySelector('.logwin-bg').style.display = 'flex';
	document.querySelector('body').style.overflowY = 'hidden';
	document.querySelector('.topnav').style.zIndex = '0';
});

document.getElementById('zarejestruj').addEventListener('click', 
function() 
{
	window.scrollTo(0, 0);
	document.querySelector('.signwin-bg').style.display = 'flex';
	document.querySelector('body').style.overflowY = 'hidden';
	document.querySelector('.topnav').style.zIndex = '0';
});

document.querySelector('.logwin-close').addEventListener('click', 
function()
{
	document.querySelector('.logwin-bg').style.display = 'none';
	document.querySelector('body').style.overflowY = 'scroll';
	document.querySelector('.topnav').style.zIndex = '100';
});

document.querySelector('.signwin-close').addEventListener('click', 
function()
{
	document.querySelector('.signwin-bg').style.display = 'none';
	document.querySelector('body').style.overflowY = 'scroll';
	document.querySelector('.topnav').style.zIndex = '100';
});