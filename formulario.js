var $form = $('#form'),
	$titulo =$('#titulo'),
	$url = $('#url'),
	$btnAg = $('#mostrar-form'),
	$contenido =$('#contenido'),
	$post =$('.item').first();

function mostrarForm()
{
	$form.slideToggle();
	return false;
}

function agregarPost()
{
	var titulo = $titulo.val(),
		url    = $url.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
	
	$clone.hide();

	$contenido.prepend($clone);

	$clone.fadeIn();	

	return false;
}

//EVENTOS
$btnAg.click(mostrarForm);
$form.on('submit', agregarPost);