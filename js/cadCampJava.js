$(document).ready(function() {
    // Máscara para o campo de número de pessoas
    $('#quantidadePessoas').mask('0000', {reverse: true});

    $('#quantidadePessoas').on('change', function() {
        const quantidade = parseInt($(this).val());
        const container = $('#nomesParticipantesContainer');
        
        // Limpar inputs de participantes existentes
        container.html('<label for="nomesParticipantes">Nome dos Participantes:</label>');
        
        for (let i = 0; i < quantidade; i++) {
            const input = $('<input>', {
                type: 'text',
                name: 'nomesParticipantes',
                class: 'nomeParticipante',
                placeholder: `Nome do Participante ${i + 1}`,
                required: true
            });
            container.append(input);
        }
    });

    $('#addParticipante').on('click', function() {
        const container = $('#nomesParticipantesContainer');
        const inputCount = container.find('.nomeParticipante').length;
        
        const input = $('<input>', {
            type: 'text',
            name: 'nomesParticipantes',
            class: 'nomeParticipante',
            placeholder: `Nome do Participante ${inputCount + 1}`,
            required: true
        });
        container.append(input);
    });

    $('#cadastroForm').on('submit', function(event) {
        event.preventDefault();

        // Validação dos campos
        let valid = true;
        $('#cadastroForm input').each(function() {
            if (!$(this).val()) {
                valid = false;
                $(this).css('border-color', 'red');
            } else {
                $(this).css('border-color', '#ccc');
            }
        });

        if (!valid) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        alert('Cadastro realizado com sucesso!');
        this.reset();
        $('#nomesParticipantesContainer').html('<label for="nomesParticipantes">Nome dos Participantes:</label>');
    });
});
