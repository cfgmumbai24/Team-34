import 'package:http/http.dart' as http;
import 'dart:convert';

class ChatService {
  final String apiUrl;
  final String apiKey;

  ChatService({required this.apiUrl, required this.apiKey});

  Future<String> getResponse(String message) async {
    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {
        'Content-Type': 'application/json',
      },
      body: json.encode({
        "contents": [
          {
            "parts": [
              {"text": message}
            ]
          }
        ]
      }),
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['candidates'][0]['content']['parts'][0]['text'];
    } else {
      throw Exception('Failed to get response');
    }
  }
}
