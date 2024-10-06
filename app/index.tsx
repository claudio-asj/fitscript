import { Image, Text, View } from 'react-native';
import {Github} from 'lucide-react-native'

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Container>
        <View className="rounded-lg bg-purple-700 p-4">
          <Image source={require('../assets/processo-interno.png')} className="max-w-24 max-h-24 mx-auto" />
          <Text className="mt-4 text-zinc-50 text-center">
            Boas-vindas ao <Text className="text-lg font-bold">FitScript</Text>! 🚀 {'\n'}
            Estamos em desenvolvimento e novas funcionalidades estão chegando em breve. Fique ligado e aproveite seus treinos!
          </Text>
          <View className='mt-2 justify-center items-center'>
            <Github />
          </View>
        </View>
      </Container>
    </>
  );
}
