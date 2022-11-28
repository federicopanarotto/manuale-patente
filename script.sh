min=1;
max=10;
arg="argomento.html"
path="../../"
filearg="../../argomento.html"

for (( counter=$min; counter < $max+1; counter++ )) 
do
    if [ $counter -lt 10 ]
    then
        num=\0\\$counter
    else
        num=$counter
    fi
    filename=\\$num\"_"\\$arg
    cp $filearg $filename
    string1='<img src="img/00.png" alt="">'
    string2=\<img src='img/'\\$num\'.png' alt=''>'
    sed -i 's/$string1/$string2/' $filename
done