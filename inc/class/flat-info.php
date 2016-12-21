	<?php
/**
 * Class to display upsells.
 *
 * @subpackage FlatX
 */
if ( ! class_exists( 'WP_Customize_Control' ) ) {
	return;
}

/**
 * Class Flat_Info
 */
class Flat_Info extends WP_Customize_Control {

	/**
	 * The type of customize section being rendered.
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $type = 'info';

	/**
	 * Control label
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $label = '';


	/**
	 * The render function for the controler
	 */
	public function render_content() {
		$links = array(
			array(
				'name' => __( 'View Documentation','flat' ),
				'link' => esc_url( 'http://themeisle.com/documentation-flat' ),
			),
			array(
				'name' => __( 'Leave us a review(it will help us)','flat' ),
				'link' => esc_url( 'https://wordpress.org/support/view/theme-reviews/flat#postform' ),
			),
			array(
				'name' => __( 'Github','flat' ),
				'link' => esc_url( 'https://github.com/Codeinwp/FlatX' ),
			),
		); ?>


		<div class="flat-theme-info">
			<?php
			foreach ( $links as $item ) {  ?>
				<a href="<?php echo esc_url( $item['link'] ); ?>" target="_blank"><?php echo esc_html( $item['name'] ); ?></a>
				<hr/>
				<?php
			} ?>
		</div>
		<?php
	}
}
