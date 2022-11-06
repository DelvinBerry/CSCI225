document.write("<div>");
document.write("<form>");
document.write("Weight(in Kilograms):<input type='float' id='weight' placeholder='weight in kg' /><br />");
document.write("Height (in cms):<input type='float' id='height' placeholder='height in cm' /><br />");
document.write('<input type="button" onclick="bmi()" value="Evaluate" /> <br />');
document.write('BMI: <input id="ans" type="text" /><br />');
document.write('Category: <input type="text" id="category" />');
document.write('<input type="reset" value="Reset"/>');
document.write('</form>');
document.write("</div>");
<script src="bmi.js"></script>