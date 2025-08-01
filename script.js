   let quantidadeSorteio = 2;
    let numeroMinimo = 1;
    let numeroMaximo = 100;
    let naoRepetir = true;

    const historicoSorteios = new Set(); 
    const sortearNumero = (quantidade, minimo, maximo) => {
      const totalPossiveis = maximo - minimo + 1;

      if (naoRepetir && historicoSorteios.size + quantidade > totalPossiveis) {
        console.warn("Não há números suficientes disponíveis para sortear sem repetição.");
        return [];
      }

      const sorteados = new Set();

      while (sorteados.size < quantidade) {
        const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

        if (naoRepetir) {
          if (!historicoSorteios.has(numero)) {
            sorteados.add(numero);
            historicoSorteios.add(numero);
          }
        } else {
          sorteados.add(numero);
        }
      }
      
      return Array.from(sorteados);
    };

    function executarSorteio() {
      const numeros = sortearNumero(quantidadeSorteio, numeroMinimo, numeroMaximo);
      const resultado = document.getElementById("resultado");

      if (numeros.length === 0) {
        resultado.textContent = "⚠️ Números esgotados. Limpe o histórico.";
      } else {
        resultado.textContent = "🎲 Números sorteados: " + numeros.join(", ");
      }
    }