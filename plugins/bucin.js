let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(frases)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "En la vida algunas veces se gana, otras veces se aprende (John Maxwell)",
  "No midas tu riqueza por el dinero que tienes, mídela por aquellas cosas que tienes y que no cambiarías por dinero (Paulo Coelho)",
  "Pedir perdón es de inteligentes, perdonar es de nobles y perdonarse es de sabios (Anónimo)",
  "Un hombre inteligente jamás se irritaría si tuviera delante siempre un espejo y se viera cuando discute (Anónimo)",
  "Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste (Anónimo)",
  "El que busca un amigo sin defectos se queda sin amigos (Proverbio turco)",
  "La sonrisa cuesta menos que la electricidad y da más luz (Proverbio escocés)",
  "No encuentres la falta, encuentra el remedio (Henry Ford)",
  "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas (William George Ward)",
  "A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar sería mucho menos si le faltara una gota (Madre Teresa de Calcuta)",
  "Cuando un tonto coge un camino, el camino se acaba y el tonto sigue (Anónimo)",
  "La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte (Buddha)",
  "Llamar a las mujeres el sexo débil es una calumnia; es la injusticia del hombre hacia la mujer, Mahatma Gandhi",
  "No tengo días malos porque no soy una mujer. No quiero ofender a nadie, Vladimir Putin",
  "No podemos tener una revolución que no involucre y libere a las mujeres, John Lennon",
  "La igualdad de las mujeres debe ser un componente central en cualquier intento para resolver los problemas sociales, económicos y políticos, Kofi Annan",
  "No pueden situar a una mujer que está dando el pecho en la misma posición, con las mismas expectativas, que un hombre que no tiene esas responsabilidades. Eso contradice la naturaleza, Recep Tayyip Erdogan",
  "Ante Dios, todos somos igualmente sabios e igualmente insensatos, Albert Einstein.",
  "La primera igualdad es la equidad, Víctor Hugo",
  "La vida es corta: sonríele a quien llora, ignora a quien te critica, y sé feliz con quien te importa, Marilyn Monroe",
  "Somos poderosos porque hemos sobrevivido en el tiempo.",
  "El miedo es cómo comportarse como si la verdad no fuera cierta.",
  "Lo malo que me ha pasado me lo ha enseñado la compasión, y lo aprendí por no ser discriminado.",
  "Nunca seas intimidado por el silencio, acepta tu definición, defiéndete.",
  "Derrumba esas puertas del armario, ponte en pie y comienza a luchar.",
  "En acto revolucionario es contar nuestra historia a nosotros.",
  "Cuando eres honesto encuentras a otros como tú.",
  "Ser diferente es bueno.",
  "Has lo correcto sin esconderte más, anímate a marchar por la tolerancia, aceptación y comprensión.",
  "El amor es en sí una ley superior.",
  "No hay nada malo en ti, el mundo en el que vives es el que está mal.",
  "El mundo sería mejor si hiciéramos un esfuerzo por ser menos horribles el uno para el otro.",
  "El feminismo es la habilidad de elegir lo que quieres hacer (Nancy Reagan)",
  "Soy fuerte, soy ambiciosa y sé exactamente lo que quiero. Si eso me convierte en una “perra”, está bien (Madonna)",
  "Una mujer sin un hombre, es como un pez sin bicicleta (Gloria Steinem)",
  "El feminismo no es sólo para mujeres, es permitir que todo el mundo tenga una vida más llena (Jane Fonda)",
  "“Feminismo” es noción radical de que las mujeres son seres humanos (Cheris Chramarae)",
  "Me niego a actuar de la manera que los hombres quieren que actúe (Madonna)",
  "Odio a los hombres que temen a la fuerza de las mujeres (Anaïs Nin)",
  "La cuestión de que las mujeres no han aprendido todavía es que nadie les ha dado ese poder. Simplemente lo toman (Roseanne Barr)",
  "La palabra feminismo necesita ser rescatada. Necesita ser reclamado de manera que sea inclusivo para el hombre (Annie Lennox)",
  "Ni machismo ni feminismo, igualdad",
  "También hay mujeres que asesinan",
  "No todos somos iguales (Antifeminismo)",
  "El que puede seguir consejos es a veces superior al que puede darlos. (Erica Jong)",
  "El problema es que piensas que tienes tiempo.",
  "Si la oportunidad no llama a tu puerta, construye la puerta.",
  "El único lugar en el que la superación está antes que el trabajo es en el diccionario.",
  "Lucha por tus sueños o los demás te impondrán los suyos.",
  "Pregúntate si lo que estás haciendo hoy te acerca al lugar en el que quieres estar mañana.",
  "El primer paso no te lleva donde quieres ir, pero te acerca donde quieres estar.",
  "No te culpo a ti por ser igual que todos. Me culpo a mi por creer que eras diferente a ellos.",
  "Te diría «perro» pero te falta lo fiel.",
  "Tu gran talento es mentirme, el mio fingir que te creo.",
  "Deja, te mando otro mensaje, como que no me ignoraste bien.",
  "Hasta los ciegos prefieren ser guiados por un perro antes que por un ser humano.",
  "A los que hablan a mis espaldas; gracias, es señal de que estoy delante tuyo.",
  "Cuando la gente mediocre no entiende, ataca.",
  "Amor es mandarlo todo a la mierda y preocuparte por si llegó bien.",
  "A veces olvido mis errores, ¿cómo te llamabas?",
  "Veo que tu mente es muy cerrada, ¿podrías hacer lo mismo con tu boca?",
  "Toda persona tiene derecho a ser estúpida, pero algunas abusan del privilegio.",
  "Te mandaría a la mierda, pero ni allí te quieren ver.",
  "Los verdaderos amigos te apuñalan de frente.",
  "Soy guapa por herencia y cabrona por experiencia.",
  "Soy guapa por herencia y cabrona por experiencia.",
  "Tengo 3 vidas: la mía, la que se inventa la gente y la que mi madre cree que tengo. – Frases de la vida",
  "Te voy a regalar un GPS para que te vayas a la mierda y no te pierdas.",
  "Coge un silla, ponte cómodo y espera a que me importe tu opinión.",
  "Con tanto maquillaje, eso no es una cara, es un rasca y gana.",
  "Y dijo dios: hágase la estupidez y naciste tú.",
  "Soy como soy, y quien no me trague que se atragante.",
  "A mi, el único que me domina es el sueño.",
  "A veces no me importa ni mi opinión, imagínate la tuya.",
  "He visto flanes de vainilla con más huevo que tú.",
  "¿En cuál de tus dos caras quieres que te diga lo falsa que eres?",
  "Es impresionante la capacidad que tengo para molestar cuando me aburro.",
  "Para importarte tan poco mi vida, ocupas mucho tiempo hablando de ella.",
  "A veces me siento como Noé, rodeada de animales.",
  "De pequeña me enseñaron a ser agradecida, así que, te agradecería que te fueras.",
  "Tu secreto está a salvo conmigo porque ni te he escuchado.",
  "No estoy soltera. Estoy en una relación a distancia porque mi novio vive en el futuro.",
  "Vas de príncipe azul y no llegas ni a pitufo.",
  "No se quien me da más lástima, si los que inventan cosas de mi vida o los que se las creen.",
  "Hoy me he bañado en aceite para que todo lo que digas me resbale.",
  "No pierdas tu tiempo en mirar mi vida, úsalo para arreglar la tuya.",
  "Hay personas tan faltas que deberían traer una etiqueta que ponga «Made in China».",
  "No le temo al enemigo que me ataca, si no al falso amigo que me abraza. – Frases de amistad",
  "Hoy mis amigos llamaron a una ambulancia, porque me muero por ti.",
  "Si no me entiendo ni yo, me vas a entender tú.",
  "Me enseñaste a querer… querer estar soltera.",
  "Si piensas que mis publicaciones son estúpidas deberías de ver las decisiones que tomo en mi vida.",
  "Si estoy soltera no es porque nadie me quiere, es porque yo no quiero a nadie.",
  "Te quedaron riquísimas las mentiras, casi me las como todas.",
  "¿Te ofendió lo que dije?, deberías escuchar lo que pienso.",
  "De las personas falsas yo sólo quiero una cosa: distancia.",
  "¿El día que se repartió la paciencia, yo dónde estaba?",
  "No somos fríos por falta de sentimientos, sino por abundancia de decepciones.",
  "El lobo siempre será el malo si solo escuchamos a Caperucita.",
  "Si no quieres respuestas sarcásticas, no hagas preguntas imbéciles.",
  "Si te preguntas por qué te saqué de mi vida, la respuesta es fácil; yo nunca estuve en la tuya. – Frases de desamor",
  "No entiendo la infidelidad, a mi me cuesta mucho encontrar una persona que me guste, imagínate dos."
]
