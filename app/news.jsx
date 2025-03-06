import { View, Text, Image } from "react-native";

export default function News() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
            <Text style={{ fontSize: 25 }}>Últimas Notícias</Text>
            <Image 
                source={{ uri: "https://i.ytimg.com/vi/SxS2_DrZnDQ/maxresdefault.jpg"}}
                    style={{ width: 500, height: 250, borderRadius: 0, margin: 10 }} 
             />
             <Text style={{ fontSize: 18, color: "white", width: "42%", margin: 10 }}>Raccoon City foi o cenário de um grande desastre causado pelo surto de um vírus mutante, o T-Virus, que transformou os habitantes da cidade em zumbis e outras criaturas monstruosas. O T-Virus foi desenvolvido pela Umbrella Corporation, uma empresa farmacêutica secreta que realizava experimentos com armas biológicas. O surto começou a se espalhar rapidamente pela cidade, levando à sua quarentena e eventual destruição pelas forças militares dos Estados Unidos.</Text>
        </View>
    );
}