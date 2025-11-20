package com.example.frasedodia

import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }

    fun quote(view: View){
        val quotes = arrayOf(
            "Enfrente os problemas e leve a melhor!",
            "Pedra dura água mole tanto bate até que fura",
            "A vingança nunca é plena, mata a alma e envenena",
            "Levanta a cabeça princesa, se não a coroa cai",
            "Sonhar nunca desistir",
            "Eu nasci pobre mas não nasci ótario"
        )

        val index = (0 .. 5).random()
        val textView = findViewById<TextView>(R.id.textViewOutput)
        textView.text = quotes[index]
    }
}