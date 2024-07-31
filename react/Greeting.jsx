import React from 'react';
import { ExtensionPoint } from 'vtex.render-runtime'
import { useQuery	} from 'react-apollo'
import getProfile from "./graphql/getUserProfile.graphql"

import styles from './styles.css'

const Greeting = () => {
	const { data, loading }	= useQuery(getProfile, {ssr: false})

  console.log("Se logado", data)

	if (loading) {
		return <ExtensionPoint id="conditional-user.default" />
	}
	return ( 
		<Fragment>
      <div className={`${styles.loggedWrapper} ${styles.wrapper}`}>
        {data?.profile ? ( 
          <ExtensionPoint id="conditional-user.perfilA" />
        ) : (	
          <ExtensionPoint id="conditional-user.default" />
        )}
      </div>
		</Fragment>
	)
}

export default Greeting;