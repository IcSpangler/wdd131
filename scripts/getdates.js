// Obtém o ano atual e insere no elemento com id 'currentyear'
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Obtém a última modificação do documento e insere no elemento com id 'lastModified'
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;