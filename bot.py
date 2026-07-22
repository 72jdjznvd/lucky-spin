import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

BOT_TOKEN = os.getenv("BOT_TOKEN")
WEBAPP_URL = os.getenv("WEBAPP_URL")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton(
                "🎰 Lucky Spin Oyna",
                web_app=WebAppInfo(url=WEBAPP_URL)
            )
        ]
    ]

    await update.message.reply_text(
        "🎰 Lucky Spin-ə xoş gəlmisən!\n\nAşağıdakı düyməyə basaraq oyunu aç.",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )

app = Application.builder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))

print("Bot işləyir...")
app.run_polling()
