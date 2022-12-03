# argoments variables passed by command line
$min_num = $args[0];
$max_num = $args[1];
$cap_num = $args[2];

# Custom variables
$home_path = 'C:\Users\federick\Documents\Dev\GitHub\patente\manuale-patente';
$argomento_file = 'argomento.html';
$back_path = '../../';
$totalpath = ''+$back_path+$argomento_file;
$newDir = 'capitolo'+$cap_num;

# Create directories if non present
Set-Location $home_path;
Set-Location 'capitoli';
if (Test-Path -Path $newDir) {
    "Directory already exists!";
} else {
    mkdir $newDir >> cache.txt;
}
Set-Location $newDir;
if (Test-Path -Path 'img') {
    "Directory already exists!";
} else {
    mkdir img >> '../cache.txt';
}

Write-Host '';

# Generate "Capitolo" file
$capfileName='capitolo'+$cap_num+'.html';
$capfilePath=''+$back_path+"capitolo.html";
$outputString='../../output.txt';
Copy-Item $capfilePath $capfileName;
$cmd='C:\Users\federick\Documents\Dev\GitHub\patente\manuale-patente\exebro.exe';
Start-Process -Wait $cmd -ArgumentList "$min_num, $max_num, $outputString" -NoNewWindow;
# Changing page title
(Get-Content $capfileName).Replace('<title>Capitolo 0</title>', '<title>Capitolo '+$cap_num+'</title>') | Set-Content $capfileName;
# Insert string created in capitolo file
(Get-Content $capfileName).Replace('changehere', (Get-Content $outputString)) | Set-Content $capfileName;

Write-Host "";

# Generate "Argomento" files
for ($counter=$min_num; $counter -lt $max_num+1; $counter++) {
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
    $filename=$name+'_'+$argomento_file;
    $fileprec=$prec+'_'+$argomento_file;
    $filesucc=$succ+'_'+$argomento_file;
    Copy-Item $totalpath $filename
    Write-Host "Created file" $filename;
    
    # Change file text
    # Change Chapter name
    (Get-Content $filename).Replace('<title>Capitolo 0</title>', '<title>Capitolo '+$cap_num+'</title>') | Set-Content $filename;
    # Change Image name
    (Get-Content $filename).Replace('<img src="img/00.png" alt="">', '<img src="img/'+$name+'.png" alt="">') | Set-Content $filename;
    # Change Back-Image name
    if ($counter -ne $min_num) {
        (Get-Content $filename).Replace('<a href="back_argument">', '<a href="'+$fileprec+'">') | Set-Content $filename;
    } else {
        (Get-Content $filename).Replace('<a href="back_argument">', '<a href="capitolo'+$cap_num+'.html">') | Set-Content $filename;
        (Get-Content $filename).Replace('<h2>argomento precedente</h2>', '<h2>torna indietro</h2>') | Set-Content $filename;
    }
    # Change Next-Image name
    if ($counter -ne $max_num) {
        (Get-Content $filename).Replace('<a href="next_argument">', '<a href="'+$filesucc+'">') | Set-Content $filename;
    } else {
        (Get-Content $filename).Replace('<a href="next_argument">', '<a href="../capitolo'+($cap_num+1)+'/capitolo'+($cap_num+1)+'.html">') | Set-Content $filename;
        (Get-Content $filename).Replace('<h2>argomento successivo</h2>', '<h2>capitolo successivo</h2>') | Set-Content $filename;
    }
}

if (Test-Path -Path '../cache.txt') {
    Remove-Item '../cache.txt';
}
Set-Location $home_path;
Remove-Item 'output.txt';