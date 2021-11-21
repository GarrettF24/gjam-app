import Layout from "../../components/Layout/Layout"
import { useState, useEffect } from "react"
import { getUserJams } from "../../services/users"
import JamCard from "../../components/JamCard/JamCard"
export default function ProfilePage(props) {
  const [userJams, setUserJams] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchUserJams = async () => {
      const jams = await getUserJams(props.user.id)
      setUserJams(jams)
      setIsLoaded(true)
    }
    fetchUserJams()
  }, [props.user])

  if (!isLoaded) {
    return (
      <Layout>
        <h1>issue</h1>
      </Layout>
    )
  }
  return (
    <Layout user={props.user}>
      <h1>{props.user.name}'s Profile Page</h1>
      <div>
        {userJams.map((jam, index) => (
          <JamCard jam={jam} key={index} />
        ))}
      </div>
    </Layout>
  )
}
