<div class="kanren">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<div class="no-thumbitiran">
			<h3><a href="<?php the_permalink(); ?>">
			<?php the_title(); ?>
			</a></h3>

			<div class="blog_info <?php st_hidden_class(); ?>">
				<p><i class="fa fa-clock-o"></i>
					<?php the_time( 'Y/m/d' ); ?>
					&nbsp;<span class="pcone">
						<i class="fa fa-folder-open-o" aria-hidden="true"></i>&nbsp;<?php the_category( ', ' ) ?>
				</span></p>
			</div>
		</div>

	<?php endwhile;
	else: ?>
		<p>記事がありません</p>
	<?php endif; ?>
</div>
