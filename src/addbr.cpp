#include <iostream>
#include <string>
using namespace std;

int main() {
    string testo;
    cout << "Inserisci il testo" << endl;
    getline(cin, testo);
    bool isfirst = true;

    for(int i = 0; i < testo.length(); i++) {
        if(testo.at(i) == '.') {
            testo.insert(i+1, "<br>");
        } else if(testo.at(i) == ':') {
            testo.insert(i+1, "<ul>");
        } else if(testo.at(i) == '-') {
            testo.at(i) = ' ';
            if(isfirst) {
                testo.insert(i+1, "<li>");
                isfirst = false;
            } else {
                testo.insert(i+1, "</li><li>");
            }
        }
    }
    cout << endl;
    cout << testo;
}