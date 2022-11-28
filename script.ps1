# argoments variables passed by command line
$min=$args[0];
$max=$args[1];
$capNum=$args[2];

# custom variables
$copyFile='argomento.html';
$path_to_file='../../';
$totalpath=''+$path_to_file+$copyFile;

# Generate "Capitolo" file
$capfileName='capitolo'+$capNum+'.html';
$capfilePath=''+$path_to_file+"capitolo.html";
$outputString='../../output.txt';
Copy-Item $capfilePath $capfileName;
$cmd='C:\Users\federick\Documents\Dev\GitHub\patente\manuale-patente\exebro.exe';
Start-Process -Wait $cmd -ArgumentList "$min, $max, $outputString" -NoNewWindow;
# Insert string created in capitolo file
(Get-Content $capfileName).Replace('changehere', (Get-Content $outputString)) | Set-Content $capfileName;

# Generate "Argomento" files
for ($counter=$min; $counter -lt $max+1; $counter++) {
    # Check for 0
    if ($counter -lt 10) {
        $prec='0'+($counter-1);
        $name='0'+$counter;
        $succ='0'+($counter+1);
        if ($counter -eq 9) {
            $succ=''+($counter+1);
        }
    } else {
        $prec=''+($counter-1);
        $name=''+$counter;
        $succ=''+($counter+1);
        if ($counter -eq 10) {
            $prec='0'+($counter-1);
        }
    }
    $filename=$name+'_'+$copyFile;
    $fileprec=$prec+'_'+$copyFile;
    $filesucc=$succ+'_'+$copyFile;
    Copy-Item $totalpath $filename
    # Change file text
    # Change Chapter name
    (Get-Content $filename).Replace('<title>Capitolo 0</title>', '<title>Capitolo '+$capNum+'</title>') | Set-Content $filename;
    # Change Image name
    (Get-Content $filename).Replace('<img src="img/00.png" alt="">', '<img src="img/'+$name+'.png" alt="">') | Set-Content $filename;
    # Change Back-Image name
    if ($counter -ne $min) {
        (Get-Content $filename).Replace('<a href="back_argument">', '<a href="'+$fileprec+'">') | Set-Content $filename;
    } else {
        (Get-Content $filename).Replace('<a href="back_argument">', '<a href="capitolo'+$capNum+'.html">') | Set-Content $filename;
        (Get-Content $filename).Replace('<h2>argomento precedente</h2>', '<h2>torna indietro</h2>') | Set-Content $filename;
    }
    # Change Next-Image name
    if ($counter -ne $max) {
        (Get-Content $filename).Replace('<a href="next_argument">', '<a href="'+$filesucc+'">') | Set-Content $filename;
    } else {
        (Get-Content $filename).Replace('<a href="next_argument">', '<a href="../capitolo'+($capNum+1)+'/capitolo'+($capNum+1)+'.html">') | Set-Content $filename;
        (Get-Content $filename).Replace('<h2>argomento successivo</h2>', '<h2>capitolo successivo</h2>') | Set-Content $filename;
    }
}

