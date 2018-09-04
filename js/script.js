function toggle(menu, option) {
    var n = document.getElementById(menu);
     
	if (n.style.display != 'none') {
        
        n.style.display = 'none';
        document.getElementById(option).setAttribute('aria-expanded', 'true');
    }
    else{
  
        n.style.display = '';
        document.getElementById(option).setAttribute('aria-expanded', 'false');
        }
    }
