$min=1;
$max=39;
$arg="argomento.html"
$path="../../"
$totalpath=''+$path+$arg

for (; $min -lt $max+1; $min++) {
    if ($min -lt 10) {
        $filename="0"+$min+"_"+$arg
    } else {
        $filename=""+$min+"_"+$arg
    }
    cp $totalpath $filename
}

