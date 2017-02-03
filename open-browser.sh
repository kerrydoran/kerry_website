for opener in xdg-open open cygstart "start"; {
 	if command -v $opener; then
    	open=$opener;
    	break;
  	fi
}

open http://0.0.0.0:3000