#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main(int argc, char* args[]) {
    ofstream file("cacca.txt");

    int size = stoi(args[1]);

    for(int i = 0; i < size; i++) {
        file << "{\n";
        file << "\t\"val\": " << i << ",\n";
        file << "\t\"title\": \"\",\n";
        file << "\t\"content\": \"\"\n";
        if(i < size-1) {
            file << "},\n";
        } else {
            file << "}\n";
        }
    }

    file.close();
}