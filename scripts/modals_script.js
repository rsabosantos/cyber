var modal_antivirus = document.getElementById('yourmodalid_antivirus');
var openmodalcontent_antivirus = document.getElementById('openmodal_antivirus');
var close1_antivirus = document.getElementById('closebutton_antivirus');
openmodalcontent_antivirus.addEventListener('click', openingmodal_antivirus);
close1_antivirus.addEventListener('click', closemodal_antivirus);
function openingmodal_antivirus() {
    modal_antivirus.style.display = 'block';
}
function closemodal_antivirus() {
    modal_antivirus.style.display = 'none';
}

//about us 
var modal_about_us = document.getElementById('yourmodalid_about_us');
var openmodalcontent_about_us = document.getElementById('openmodal_about_us');
var close1_about_us = document.getElementById('closebutton_about_us');
openmodalcontent_about_us.addEventListener('click', openingmodal_about_us);
close1_about_us.addEventListener('click', closemodal_about_us);
function openingmodal_about_us() {
    modal_about_us.style.display = 'block';
}
function closemodal_about_us() {
    modal_about_us.style.display = 'none';
}


var modal_terms = document.getElementById('yourmodalid_terms');
var openmodalcontent_terms = document.getElementById('openmodal_terms');
var close1_terms = document.getElementById('closebutton_terms');
openmodalcontent_terms.addEventListener('click', openingmodal_terms);
close1_terms.addEventListener('click', closemodal_terms);
function openingmodal_terms() {
    modal_terms.style.display = 'block';
}
function closemodal_terms() {
    modal_terms.style.display = 'none';
}     