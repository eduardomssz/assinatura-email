// Função principal para gerar a assinatura
function gerarAssinatura() {
    // 1. Capturar os dados (usa placeholders se o campo estiver vazio)
    const nome = document.getElementById('nome').value || "Nome e Sobrenome";
    const cargo = document.getElementById('cargo').value || "Cargo na Empresa";
    const whatsapp = document.getElementById('whatsapp').value || "(XX) XXXX-XXXX";
    const email = document.getElementById('email').value || "seu.email@verion.com.br";
    const ramal = document.getElementById('ramal').value || "XXXX";
    
    // ⚠️ URLs das Logos
    const urlLogo = "img/LOGOVERION.png";
    
    // 2. Construir o HTML da assinatura (Usando TABELA e Estilos INLINE)
    const htmlAssinatura = `
                <p style="margin-bottom: 25px; padding-top: 0; color: #555; font-size: 12pt;">
                     Atenciosamente,
                </p>
        <table cellspacing="0" cellpadding="0" border="0" style="font-family: Arial, sans-serif; font-size: 10pt; line-height: 1.2;">
            <tr> 
                 <td style="border-right: 1px solid red; padding-right: 15px; vertical-align: top;">
                    <p style="margin: 0; padding: 0;">
                        <strong style="color: black; font-size: 18pt;">${nome}</strong>
                    </p>
                    
                    <p style="margin: 0; padding: 0; color: black; font-size: 9pt;">
                        ${cargo}
                    </p>
                    
                    <div style="height: 5px; line-height: 5px; font-size: 1px;">&nbsp;</div>
                    <p>
                    
                        <a class="texto-padrao">E-mail:</a> 
                        <a>
                            <a href="mailto:${email}" class="texto-complemento";">${email}</a>
                        </a>
                    </p>
                    <p>
                        <a class="texto-padrao"> WhatsApp:</a> 
                        <a href ="https://wa.me/55${whatsapp.replace(/\D/g, '')}"<span class="texto-complemento";">${whatsapp}</a>
                    </p>

                    <!-- TABELA DUPLA AJUSTADA (CORREÇÃO PRINCIPAL) -->
                    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px; font-family: Arial, sans-serif; border-collapse: collapse;">
                        <tr>
                            <td style="vertical-align: middle; padding-right: 20px; text-align: center;">
                                <span class="texto-padrao" style="display: block; margin: 0; padding-bottom: 4px; font-size: 9pt;">
                                    Telefone Fixo:
                                </span>
                                <a href="tel:1121007400" class="texto-complemento"style="text-decoration: underline;display: block; font-size: 9pt;">
                                    (11) 2100-7400
                                </a>
                            </td>

                            <td style="vertical-align: middle; padding-left: 20px; text-align: center; border-left: 1px solid #eeeeee;">
                                <span class="texto-padrao"style="display: block; margin: 0; padding-bottom: 4px; font-size: 9pt;">
                                    Ramal:
                                </span>
                                <span class= "texto-complemento";style="display: block; font-size: 9pt;">
                                    ${ramal}
                                </span>
                            </td>
                        </tr>
                    </table>
                
                <td style="padding-left: 15px;">
                    <a href="https://www.verion.com.br/" target="_blank" style="text-decoration: none;"vertical-align: top;">
                        <img src="${urlLogo}" alt="Logo da Verion" width="325" height="" style="display: block; border: none; margin-bottom: 30px;">
                    </a>
                    <div style=" margin:0; color: black; font-size: 10pt;">
                        <p class="texto-padrao" >
                            
                             <div class="texto-complemento">
                                <a class="texto-padrao">Endereço:</a><br>
                                <a href="https://maps.app.goo.gl/TcP9VjYx2XyAZge47" class="texto-complemento";">
                                <u>R. Pedro de Toledo, 175 - Taboão, Guarulhos - SP, 07140-000</u>
                                </a>
                            </div>
                        </p>    
                    </div>
                    <!-- TABELA DUPLA AJUSTADA (CORREÇÃO PRINCIPAL) -->
                    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                        <tr>
                            <!-- COLUNA 1 -->
                            <td style="vertical-align: top; padding-right: 20px;text-align: center">
                                <p style="margin: 0 0 3px 0; padding-bottom: 10px;">
                                    <a href="https://www.verion.com.br/" style="color: red; text-decoration: none;">
                                        <u>VERION Oleohidráulica Catálogo Completo</u>
                                    </a>
                                </p>
                                <div style="text-align: center; font-size: 40px">
                                    <a href="https://www.linkedin.com/company/oleohidraulica-verion/"><img src="img/Linkedin.png" class="icones"></a>
                                    <a href="https://www.instagram.com/verionoleohidraulicaoficial/"><img src="img/Instagram.png" class="icones"></a>
                                    <a href="https://www.facebook.com/VerionOleohidraulicaBrasil"><img src="img/Facebook.png" class="icones"></a>
                                    <a href="https://www.youtube.com/@VERIONOHBRASIL"><img src="img/Youtube.png" class="icones"></a>
                                    <a href="https://www.tiktok.com/@verionbrasil"><img src="img/Tiktok.png" class="icones"></a>
                                </div>
                            </td>

                            <!-- COLUNA 2 -->
                                <td style="vertical-align: top;text-align: center;">
                                    <p style="margin: 0 0 3px 0;padding-bottom: 10px">
                                        <a href="https://agriculturaverion.com.br/" style="color: red; text-decoration: none;">
                                            <u>VERION Agricultura Catálogo Pulverização</u>
                                        </a>
                                    </p>
                                    <div style="text-align: center; font-size: 40px">
                                        <a href="https://www.linkedin.com/company/verionbrasilagricultura/"><img src="img/Linkedin.png" class="icones"></a>
                                        <a href="https://www.instagram.com/verionagricultura/"><img src="img/Instagram.png" class="icones"></a>
                                        <a href="https://www.facebook.com/VerionAgriculturaBrasil/"><img src="img/Facebook.png" class="icones"></a>
                                        <a href="https://www.youtube.com/@VERIONAgriculturaOficial"><img src= "img/Youtube.png" class="icones"></a>
                                        <a href="https://www.tiktok.com/@agriculturaverionbrasil"><img src="img/Tiktok.png" class="icones"></a>
                             </td>
                        </tr>
                </td>
            </tr>
        </table>
    `;

    // 3. Exibir na prévia
    document.getElementById('assinatura-preview').innerHTML = htmlAssinatura;
}

// Função para selecionar o conteúdo e instruir o usuário a copiar
function copiarAssinatura() {
    const elementoAssinatura = document.getElementById('assinatura-preview');
    
    // Seleciona o conteúdo do elemento
    const range = document.createRange();
    range.selectNode(elementoAssinatura);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    alert('A assinatura foi SELECIONADA. Agora, pressione Ctrl+C (ou Cmd+C no Mac) para copiar e cole em Assinaturas no e-mail.');
}
// Máscara automática para telefone / WhatsApp
function mascaraTelefone(input) {
    let valor = input.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');

    // Se não tiver número, deixa vazio
    if (valor.length === 0) {
        input.value = "";
        return;
    }

    // Limita a 11 dígitos
    valor = valor.substring(0, 11);

    // Formatação dinâmica
    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else {
        valor = "(" + valor;
    }

    input.value = valor;
}
// Chamar a função ao carregar a página para exibir os valores padrão
window.onload = gerarAssinatura;
