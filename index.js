document.getElementById("send-whatsapp").addEventListener("click", function() {
  const assunto = document.getElementById("assunto").value;
  const descricao = document.getElementById("descricao").value.trim();

  if (assunto === "selecionar-assunto") {
    alert("Por favor, selecione um assunto válido.");
    return;
  }

  if(assunto === "Outro" & descricao === '') {
    alert("Por favor, selecione uma descrição");
    return;
  }
  
  let mensagem = `Olá, vim do site da WSS\n\nAssunto: ${assunto}`;

  if (descricao) {
    mensagem += `\nDescrição: ${descricao}`;
  }

  const mensagemEncoded = encodeURIComponent(mensagem);
  const numeroWhatsApp = "5553981195740"; 
  const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
  window.open(whatsappURL, "_blank");

});