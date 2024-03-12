# assignment = input("please enter the assignment number")
assignment = str(7)
question = input("please enter the question number: ")


input_number = input('please enter the input number: ')
output_number = input('please enter the output number: ')

java_file = open('javawrite.txt',"w")

#for button
java_file.write('const assignment7question'+question+'button = document.getElementById("asn7question'+question+'button");\n')
java_file.write('\n\n')

alpha_list = ['a','b','c','d','e','f','g,','h','i','j','k','l','m','n','o','p']
asignment_list = ['one','two','three','four','five','six','sev','eight','nine','ten','eleven','twelve','thirteen']

#for outputs
for i in range(0, int(output_number)):
    java_file.write('const assignment'+assignment+'question'+question+'output'+alpha_list[i]+' = document.getElementById("asn'+assignment+'question'+question+'output'+alpha_list[i]+'");\n')

java_file.write('\n\n')

#event_listener
    
java_file.write('assignment'+assignment+'question'+question+'button.addEventListener("click", ()=>{\n\n\n')
for i in range(0,int(input_number)):
    java_file.write('\tvar A = parseFloat(document.getElementById("asn'+assignment+'question'+question+alpha_list[i]+'").value);\n')

for i in range(0,int(output_number)):
    java_file.write('\tassignment'+assignment+'question'+question+'output'+alpha_list[i]+'.innerHTML = ;\n')

java_file.write('\n\n});')



java_file.close()

#HTML Write up -------------------------------------------------------------------------------------------------------

html_file = open('htmlwrite.txt','w')

html_file.write('<div id="assignment'+asignment_list[int(assignment)-1]+question+'" data-taba'+assignment+'-content>\n\n')

for i in range(int(input_number)):
    html_file.write('\t<p><input type="text" placeholder="Enter Here" id="asn'+assignment+'question'+question+alpha_list[i]+'" maxlength="10"></p>\n')
html_file.write('\n\n')

html_file.write('\t<input type="button" id="asn'+assignment+'question'+question+'button" style="width:100px; height:20px;" value="SOLVE NOW">\n\n')

for i in range(int(output_number)):
    html_file.write('\t<p class="asign'+assignment+'output" id="asn'+assignment+'question'+question+'output'+alpha_list[i]+'"></p>\n')

html_file.write('\n\n</div>')
