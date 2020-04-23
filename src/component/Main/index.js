import React from 'react';

import Routes from '../../router';
import './styles.scss';
import { connect } from 'react-redux';

const Main = () => {
	return (
		<main id="Main">
			<Routes />
		</main>
	);
}

export default connect()(Main);
