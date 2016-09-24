<div class="st-pagelink">
	<?php $args = array(
		'end_size'           => 1,
		'mid_size'           => 1,
		'prev_next'          => True,
		'prev_text'          => '&laquo;',
		'next_text'          => '&raquo;',
		'type'               => 'plain',
		);
	echo paginate_links( $args ); ?>
</div>
