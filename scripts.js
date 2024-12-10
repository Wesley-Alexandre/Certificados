document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const certificadoFile = document.getElementById("certificado").files[0];
    const descricao = document.getElementById("descricao").value;

    if (certificadoFile && descricao) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const certificadoItem = document.createElement("div");
            certificadoItem.classList.add("certificado-item");

            const certificadoPreview = document.createElement("img");
            certificadoPreview.src = e.target.result;

            const certificadoDescricao = document.createElement("p");
            certificadoDescricao.textContent = descricao;

            certificadoItem.appendChild(certificadoPreview);
            certificadoItem.appendChild(certificadoDescricao);

            document.getElementById("lista-certificados").appendChild(certificadoItem);
        };

        reader.readAsDataURL(certificadoFile); 
    }
});
