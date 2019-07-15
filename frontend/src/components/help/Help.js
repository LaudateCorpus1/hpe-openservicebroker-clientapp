import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Box, Button, Paragraph, Text } from "grommet";
import { User } from "grommet-icons";


//========================================= Settings Page
const Settings = () => (
  <Box pad='medium' align='start' justify='start' gap='large'> 
    <Box gap='small' flex={false}>
      <Text weight='bold' size='xxlarge'>References for the open service broker API</Text>
      <Anchor href='https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md' label='OSB Specification' weight='bold' size='xlarge' color='brand' />
      <Anchor href='https://www.openservicebrokerapi.org' label='OSB Information' weight='bold' size='xlarge' color='brand' />
      <Anchor href='https://developer.hpe.com/blog/an-open-service-broker-project-delivers-a-sample-devops-environment-to-a' label='HPE Blog Post regarding an OSB use case'
        weight='bold' size='xlarge' color='brand' 
      />
    </Box>
    <Box flex={false}>
      <Text weight='bold' size='xxlarge'>How to use this portal</Text>
      <Paragraph size='xlarge'>You must first register a service broker to access its services. Do this in the Settings page. Once registered, the Catalog page will show you 
        what the broker offers. Click on a service to reach the Deployment page, where you will fill in the necessary information to deploy an instance of that service. You 
        can manage your instances in the Deployed Services page. You can also manage your registered brokers, or add a new one, in the Settings page.
      </Paragraph>
    </Box>
    <Box flex={false}>
      <Text weight='bold' size='xxlarge'>About HPE</Text>
      <Paragraph size='xlarge'>We help customers use technology to slash the time it takes to turn ideas into value. In turn, they transform industries, markets and lives.
        Some of our customers run traditional IT environments. Most are transitioning to a secure, cloud-enabled, mobile-friendly infrastructure. Many rely on a combination 
        of both. Wherever they are in that journey, we provide the technology and solutions to help them succeed. 
      </Paragraph>
      <Text weight='bold' size='xlarge'>Links</Text>
      <Anchor href='https://www.hpe.com/us/en/home.html?chatsrc=ot-en&jumpid=ps_p2jm73rngz_aid-510455007&gclid=Cj0KCQjwyLDpBRCxARIsAEENsrKNSojVUoiPQiu8MaYkDXKLKwRk416kIHTyTQma9sj6IGnWz1gZCJMaAmxQEALw_wcB&gclsrc=aw.ds'
        label='HPE Official Site' weight='bold' size='xlarge' color='brand' 
      />
      <Anchor href='https://home.hpe.com' label='HPE Developer Home' weight='bold' size='xlarge' color='brand' />
    </Box>
    {/* <Box height='10vh' flex={false} /> */}
  </Box>
)

export default Settings;
