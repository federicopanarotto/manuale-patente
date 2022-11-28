#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;

string ifMine10(int value, string pass_string) {
    if(value < 10) {
        pass_string += "0";
    }
    return pass_string;
}

int main(int argc, char* args[]) {
    const string FILENAME = args[3];
    ofstream fout(FILENAME);
    cout << "Program started...\n";

    int min_value = atoi(args[1]);
    int max_value = atoi(args[2]);
    string num_value;

    for(int i = min_value; i < max_value+1; i++) {
        fout << "<!-- ARGOMENTO " << i <<" -->\n";
        fout << ifMine10(i, "<a href=\"") << i << "_argomento.html\">\n";
        fout << "\t<element>\n";
        fout << "\t\t<div class=\"container-img\">\n";
        fout << ifMine10(i, "\t\t\t<img src=\"img/") << i <<".png\" alt=\"\">\n";
        fout << "\t\t</div>\n";
        fout << "\t<h1>text</h1>\n";
        fout << "\t</element>\n";
        fout << "</a>\n";
        num_value="";
    }

    fout.close();
    cout << "File created! " << args[3] << "\n";
}