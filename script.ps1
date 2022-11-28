$min=1;
$max=39;
$arg="argomento.html"
$path="../../"
$totalpath=''+$path+$arg

for (; $min -lt $max+1; $min++) {
    if ($min -lt 10) {
        $num="0"+$min
    } else {
        $num=""+$min
    }
    $filename=''+$num+"_"+$arg
    Copy-Item $totalpath $filename
    $newstring0='<img src="img/00.png" alt="">'
    $newstring1='<img src="img/'+$num+'.png" alt="">'
    $command='"s/'+$newstring0+'/'+$newstring1+'/"'
    sed -i $command $filename
}

